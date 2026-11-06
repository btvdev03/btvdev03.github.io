// Web Audio API Retro Sound Synthesizer
// Zero external assets, instant playback, pure synthesized bleeps & boops

class RetroAudioManager {
  private ctx: AudioContext | null = null
  private enabled: boolean = false

  constructor() {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('retro_sound_enabled')
      this.enabled = stored === 'true'
    }
  }

  private initContext(): AudioContext | null {
    if (typeof window === 'undefined') return null
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
      if (AudioCtx) {
        this.ctx = new AudioCtx()
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {})
    }
    return this.ctx
  }

  public isEnabled(): boolean {
    return this.enabled
  }

  public toggle(): boolean {
    this.enabled = !this.enabled
    if (typeof window !== 'undefined') {
      localStorage.setItem('retro_sound_enabled', String(this.enabled))
    }
    if (this.enabled) {
      this.initContext()
      this.play('success')
    }
    return this.enabled
  }

  public play(type: 'click' | 'toggle' | 'success' | 'terminal' | 'hover') {
    if (!this.enabled) return
    const ctx = this.initContext()
    if (!ctx) return

    try {
      const now = ctx.currentTime
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()

      osc.connect(gain)
      gain.connect(ctx.destination)

      switch (type) {
        case 'click':
          // Subtle retro blip
          osc.type = 'triangle'
          osc.frequency.setValueAtTime(580, now)
          osc.frequency.exponentialRampToValueAtTime(820, now + 0.04)
          gain.gain.setValueAtTime(0.08, now)
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04)
          osc.start(now)
          osc.stop(now + 0.04)
          break

        case 'toggle':
          // Soft switch blip
          osc.type = 'sine'
          osc.frequency.setValueAtTime(440, now)
          osc.frequency.setValueAtTime(660, now + 0.03)
          gain.gain.setValueAtTime(0.06, now)
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06)
          osc.start(now)
          osc.stop(now + 0.06)
          break

        case 'terminal':
          // Crisp keystroke chirp
          osc.type = 'square'
          osc.frequency.setValueAtTime(320, now)
          gain.gain.setValueAtTime(0.03, now)
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.02)
          osc.start(now)
          osc.stop(now + 0.02)
          break

        case 'hover':
          // Minimal high tick
          osc.type = 'sine'
          osc.frequency.setValueAtTime(980, now)
          gain.gain.setValueAtTime(0.02, now)
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.015)
          osc.start(now)
          osc.stop(now + 0.015)
          break

        case 'success':
          // 2-tone arpeggio
          osc.type = 'sine'
          osc.frequency.setValueAtTime(523.25, now) // C5
          osc.frequency.setValueAtTime(659.25, now + 0.06) // E5
          osc.frequency.setValueAtTime(783.99, now + 0.12) // G5
          gain.gain.setValueAtTime(0.08, now)
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22)
          osc.start(now)
          osc.stop(now + 0.22)
          break
      }
    } catch {
      // Ignore audio synthesis errors on locked browsers
    }
  }
}

export const retroAudio = new RetroAudioManager()
