#!/usr/bin/env python3
"""
Generate 5 authentic 16-bit retro pixel art masterpieces for btvdev03.github.io
directly inspired by the 5 reference images provided by the user:
- ch1.png (117x96): Sampan gliding along canal shaded by nypa palms, lotus pads & flowers (Photos 2 & 3)
- ch2.png (117x96): Iconic sunset river lift-net rigging (Vó bè kéo cá hoàng hôn sông nước) (Photo 1)
- ch3.png (117x96): Cai Rang floating market bustling with produce boats and Cay Beo
- ch4.png (117x96): Golden rice fields, That Son peaks, soaring white storks and That Not palms
- pond.png (163x225): Grand Dong Thap Muoi lotus bloom close-up, sampan harvest & That Son range (Photos 3, 4, 5)
"""

import math
import base64
import os
from PIL import Image, ImageDraw

def hex_to_rgb(h):
    h = h.lstrip('#')
    return tuple(int(h[i:i+2], 16) for i in (0, 2, 4))

def blend(c1, c2, t):
    t = max(0.0, min(1.0, t))
    return (
        int(c1[0] + (c2[0] - c1[0]) * t),
        int(c1[1] + (c2[1] - c1[1]) * t),
        int(c1[2] + (c2[2] - c1[2]) * t)
    )

def bayer4(x, y):
    b = [
        [0,  8,  2, 10],
        [12, 4, 14, 6],
        [3, 11,  1,  9],
        [15, 7, 13,  5]
    ]
    return (b[y % 4][x % 4] + 0.5) / 16.0

def dither_gradient_v(im, x0, y0, x1, y1, col_top, col_bot):
    for y in range(y0, y1 + 1):
        t = (y - y0) / max(1, (y1 - y0))
        for x in range(x0, x1 + 1):
            d = bayer4(x, y) - 0.5
            val = max(0.0, min(1.0, t + d * 0.25))
            im.putpixel((x, y), blend(col_top, col_bot, val))

# =========================================================================
# ART 1: ch1 - Xuồng ba lá qua rặng dừa nước & hoa sen kênh rạch (117x96)
# =========================================================================
def draw_ch1():
    W, H = 117, 96
    im = Image.new('RGB', (W, H))
    draw = ImageDraw.Draw(im)

    # 1. Sky & distant trees (y: 0..26)
    c_sky_top = hex_to_rgb('#89c2d9')
    c_sky_mid = hex_to_rgb('#b8e0d2')
    c_sky_bot = hex_to_rgb('#e8f5e9')
    for y in range(0, 24):
        t = y / 24.0
        c = blend(c_sky_top, c_sky_bot, t)
        for x in range(W):
            d = bayer4(x, y) - 0.5
            im.putpixel((x, y), blend(c, c_sky_mid, d * 0.15))

    # Distant lush tree line
    c_far_trees1 = hex_to_rgb('#1b4332')
    c_far_trees2 = hex_to_rgb('#2d6a4f')
    c_far_trees3 = hex_to_rgb('#40916c')
    for x in range(W):
        tree_h = int(18 + 4 * math.sin(x * 0.12) + 2 * math.cos(x * 0.28) + 2 * math.sin(x * 0.05))
        for y in range(tree_h, 30):
            d = bayer4(x, y)
            col = c_far_trees1 if d < 0.4 else (c_far_trees2 if d < 0.8 else c_far_trees3)
            im.putpixel((x, y), col)

    # 2. Water canal (winding from x=75..116 at y=25 down to x=0..70 at y=95)
    c_water_deep = hex_to_rgb('#264653')
    c_water_mid  = hex_to_rgb('#2a9d8f')
    c_water_phusa= hex_to_rgb('#6f8e7b') # alluvial tint
    c_water_glint= hex_to_rgb('#e0f2f1')

    # Canal boundary functions
    def canal_left(y):
        t = (y - 25) / 71.0
        return 72 - 82 * t + 6 * math.sin(t * 3.5)

    def canal_right(y):
        t = (y - 25) / 71.0
        return 120 - 45 * t + 8 * math.sin(t * 3.2 + 0.5)

    for y in range(25, H):
        xl = int(canal_left(y))
        xr = int(canal_right(y))
        for x in range(max(0, xl), min(W, xr + 1)):
            t = (y - 25) / 71.0
            dist_to_bank = min(x - xl, xr - x)
            d = bayer4(x, y)
            wave = math.sin(x * 0.4 + y * 0.6) * 0.15
            water_col = blend(c_water_deep, c_water_mid, t * 0.5 + wave)
            if dist_to_bank < 4:
                water_col = blend(hex_to_rgb('#1e3d34'), water_col, dist_to_bank / 4.0)
            elif (x + y * 2) % 13 == 0 and d > 0.7:
                water_col = c_water_glint
            im.putpixel((x, y), water_col)

    # 3. Embankments and thick Nypa Palm (Dừa nước) clusters
    c_palm_dark = hex_to_rgb('#0b2b1a')
    c_palm_mid  = hex_to_rgb('#165b33')
    c_palm_light= hex_to_rgb('#2ec4b6')
    c_palm_yellow=hex_to_rgb('#70e000')

    # Draw left bank palms (x <= canal_left(y))
    for y in range(25, H):
        xl = int(canal_left(y))
        for x in range(0, min(W, xl + 2)):
            d = bayer4(x, y)
            # Palm frond patterns
            frond = math.sin(x * 0.5 - y * 0.3) + math.cos(x * 0.2 + y * 0.4)
            if frond > 0.6:
                col = c_palm_yellow if d > 0.8 else c_palm_light
            elif frond > 0.0:
                col = c_palm_mid
            else:
                col = c_palm_dark
            im.putpixel((x, y), col)

    # Draw right bank palms (x >= canal_right(y))
    for y in range(25, H):
        xr = int(canal_right(y))
        for x in range(max(0, xr - 1), W):
            d = bayer4(x, y)
            frond = math.sin(x * 0.45 + y * 0.35) + math.cos(x * 0.3 - y * 0.25)
            if frond > 0.55:
                col = c_palm_yellow if d > 0.75 else c_palm_light
            elif frond > -0.1:
                col = c_palm_mid
            else:
                col = c_palm_dark
            im.putpixel((x, y), col)

    # Add distinct Nypa palm fronds curving out over the water
    def draw_frond(x0, y0, length, angle, num_leaflets):
        for i in range(length):
            t = i / float(length)
            px = int(x0 + i * math.cos(angle) + 4 * math.sin(t * 3.14))
            py = int(y0 + i * math.sin(angle) + 5 * (t ** 1.8))
            if 0 <= px < W and 0 <= py < H:
                im.putpixel((px, py), c_palm_mid)
                for s in [-1, 1]:
                    lx = px + int(s * 3 * math.sin(angle) * (1 - t * 0.5))
                    ly = py - int(s * 3 * math.cos(angle) * (1 - t * 0.5))
                    if 0 <= lx < W and 0 <= ly < H:
                        im.putpixel((lx, ly), c_palm_light if (px + py) % 2 == 0 else c_palm_yellow)

    draw_frond(18, 40, 22, 0.4, 10)
    draw_frond(25, 65, 26, 0.25, 12)
    draw_frond(12, 80, 24, 0.15, 10)
    draw_frond(112, 45, 24, 2.7, 10)
    draw_frond(105, 70, 26, 2.9, 12)

    # 4. Lotus pads & flowers in water
    lotus_pads = [
        (48, 42, 6), (56, 38, 5), (65, 46, 7), (74, 52, 6),
        (35, 78, 8), (42, 85, 9), (52, 82, 7), (25, 90, 8),
        (78, 75, 7), (86, 82, 6), (70, 90, 8)
    ]
    c_pad_edge = hex_to_rgb('#134e26')
    c_pad_body = hex_to_rgb('#2a9134')
    c_pad_light= hex_to_rgb('#52b788')
    for cx, cy, r in lotus_pads:
        for dy in range(-r + 1, r):
            for dx in range(-r, r + 1):
                px, py = cx + dx, cy + dy
                if 0 <= px < W and 0 <= py < H:
                    dist2 = dx * dx + (dy * 1.6) ** 2
                    if dist2 <= r * r:
                        # V-notch in lotus pad
                        if abs(dx) < 2 and dy < 0:
                            continue
                        if dist2 > (r - 1.2) ** 2:
                            im.putpixel((px, py), c_pad_edge)
                        elif dx % 2 == 0 and dy % 2 == 0:
                            im.putpixel((px, py), c_pad_light)
                        else:
                            im.putpixel((px, py), c_pad_body)

    # Lotus blooms (Sen hồng Đồng Tháp)
    lotus_blooms = [(50, 40), (66, 44), (37, 76), (46, 83), (80, 74)]
    c_lotus_deep = hex_to_rgb('#9d174d')
    c_lotus_pink = hex_to_rgb('#f472b6')
    c_lotus_white= hex_to_rgb('#ffffff')
    c_lotus_gold = hex_to_rgb('#facc15')
    for bx, by in lotus_blooms:
        # 5-pixel blossom cross with yellow center
        im.putpixel((bx, by), c_lotus_gold)
        for dx, dy in [(-1, 0), (1, 0), (0, -1), (0, 1), (-1, -1), (1, -1)]:
            if 0 <= bx + dx < W and 0 <= by + dy < H:
                im.putpixel((bx + dx, by + dy), c_lotus_pink)
        if 0 <= bx < W and 0 <= by - 2 < H:
            im.putpixel((bx, by - 2), c_lotus_white)
        if 0 <= bx < W and 0 <= by + 1 < H:
            im.putpixel((bx, by + 1), c_lotus_deep)

    # 5. Chiếc xuồng ba lá & người chèo nón lá (Sampan in center of canal)
    # Centered at (x=58, y=60), length ~36, angled along canal direction
    sx0, sy0 = 56, 58
    c_wood_dark = hex_to_rgb('#362112')
    c_wood_mid  = hex_to_rgb('#633f25')
    c_wood_light= hex_to_rgb('#8f5f39')
    c_wood_rim  = hex_to_rgb('#b58356')

    # Draw wooden hull (curved sampan shape)
    for i in range(-16, 17):
        t = i / 16.0
        # Boat centerline
        bx = int(sx0 + i * 0.88)
        by = int(sy0 + i * 0.48 - (1 - t * t) * 3)
        width = int(4.5 * (1 - (t * 0.85) ** 2))
        for w in range(-width, width + 1):
            px = bx - int(w * 0.48)
            py = by + int(w * 0.88)
            if 0 <= px < W and 0 <= py < H:
                if abs(w) == width:
                    im.putpixel((px, py), c_wood_rim)
                elif abs(w) == width - 1:
                    im.putpixel((px, py), c_wood_mid)
                else:
                    # Inside bottom planks
                    im.putpixel((px, py), c_wood_light if i % 4 == 0 else c_wood_dark)

    # Upturned bow and stern tips
    im.putpixel((sx0 - 16, sy0 - 10), c_wood_rim)
    im.putpixel((sx0 + 16, sy0 + 8), c_wood_rim)

    # Wooden benches inside boat
    for bench_offset in [-6, 6]:
        for w in range(-2, 3):
            px = int(sx0 + bench_offset * 0.88 - w * 0.48)
            py = int(sy0 + bench_offset * 0.48 + w * 0.88)
            if 0 <= px < W and 0 <= py < H:
                im.putpixel((px, py), hex_to_rgb('#4a2e1b'))

    # Person with Nón lá and Áo bà ba rowing
    rx, ry = sx0 - 2, sy0 - 4
    # Blue Áo bà ba body
    c_baba_blue = hex_to_rgb('#1d4ed8')
    c_baba_light = hex_to_rgb('#60a5fa')
    for dy in range(0, 4):
        for dx in range(-2, 3):
            im.putpixel((rx + dx, ry + dy), c_baba_light if dx == 0 else c_baba_blue)

    # Nón lá (Conical hat)
    c_non_tip = hex_to_rgb('#fffbeb')
    c_non_body = hex_to_rgb('#fef08a')
    c_non_edge = hex_to_rgb('#ca8a04')
    im.putpixel((rx, ry - 4), c_non_tip)
    for dy, hw in [( -3, 1), (-2, 2), (-1, 3)]:
        for dx in range(-hw, hw + 1):
            col = c_non_body if abs(dx) < hw else c_non_edge
            im.putpixel((rx + dx, ry + dy), col)

    # Wooden Oar (Mái chèo gỗ)
    c_oar = hex_to_rgb('#d97706')
    for step in range(-8, 9):
        ox = rx + int(step * 0.7)
        oy = ry + 2 + int(step * 0.7)
        if 0 <= ox < W and 0 <= oy < H:
            im.putpixel((ox, oy), c_oar)
    # Oar blade in water
    im.putpixel((rx + 6, ry + 8), hex_to_rgb('#92400e'))
    im.putpixel((rx + 7, ry + 9), hex_to_rgb('#92400e'))

    # Water ripple from boat
    im.putpixel((sx0 + 17, sy0 + 9), c_water_glint)
    im.putpixel((sx0 + 18, sy0 + 10), c_water_glint)

    return im

# =========================================================================
# ART 2: ch2 - Cầu vó kéo cá hoàng hôn sông nước Tiền/Hậu (117x96) [Ảnh 1]
# =========================================================================
def draw_ch2():
    W, H = 117, 96
    im = Image.new('RGB', (W, H))

    # 1. Spectacular Golden Sunset Sky (y: 0..48)
    # Colors directly matched from Photo 1 (golden orange, glowing amber, deep purple sky top)
    c_sky_0 = hex_to_rgb('#2d122c') # top twilight violet
    c_sky_1 = hex_to_rgb('#6b1f3c') # rich crimson
    c_sky_2 = hex_to_rgb('#b83828') # fiery vermilion
    c_sky_3 = hex_to_rgb('#e66d1f') # deep orange
    c_sky_4 = hex_to_rgb('#faa327') # golden amber
    c_sky_5 = hex_to_rgb('#fde047') # brilliant yellow
    c_sky_6 = hex_to_rgb('#fffbeb') # bright white-yellow horizon

    for y in range(0, 48):
        t = y / 48.0
        if t < 0.2:
            base_col = blend(c_sky_0, c_sky_1, t / 0.2)
        elif t < 0.4:
            base_col = blend(c_sky_1, c_sky_2, (t - 0.2) / 0.2)
        elif t < 0.6:
            base_col = blend(c_sky_2, c_sky_3, (t - 0.4) / 0.2)
        elif t < 0.8:
            base_col = blend(c_sky_3, c_sky_4, (t - 0.6) / 0.2)
        else:
            base_col = blend(c_sky_4, c_sky_5, (t - 0.8) / 0.2)

        for x in range(W):
            d = (bayer4(x, y) - 0.5) * 0.2
            col = blend(base_col, c_sky_6, max(0.0, d))
            im.putpixel((x, y), col)

    # Radiant Sunset Sun at (x=80, y=32)
    sun_x, sun_y = 80, 32
    for dy in range(-7, 8):
        for dx in range(-7, 8):
            r = math.sqrt(dx * dx + dy * dy)
            px, py = sun_x + dx, sun_y + dy
            if 0 <= px < W and 0 <= py < 48:
                if r <= 3.2:
                    im.putpixel((px, py), hex_to_rgb('#ffffff'))
                elif r <= 5.5:
                    d = bayer4(px, py)
                    im.putpixel((px, py), hex_to_rgb('#fff3b0') if d > 0.4 else hex_to_rgb('#fef08a'))
                elif r <= 7.5 and bayer4(px, py) > 0.65:
                    im.putpixel((px, py), hex_to_rgb('#fde047'))

    # 2. Distant river shore (y: 45..49)
    c_shore = hex_to_rgb('#31161d')
    for x in range(W):
        sh_y = int(46 + 1.5 * math.sin(x * 0.1) + math.cos(x * 0.3))
        for y in range(sh_y, 49):
            im.putpixel((x, y), c_shore)

    # 3. River with brilliant golden reflection column (y: 48..96)
    c_water_dark = hex_to_rgb('#2c1619')
    c_water_mid  = hex_to_rgb('#6b2d18')
    c_water_gold = hex_to_rgb('#f59e0b')
    c_water_sun  = hex_to_rgb('#fef08a')
    c_water_glint= hex_to_rgb('#ffffff')

    for y in range(48, H):
        t = (y - 48) / 48.0
        wave_phase = math.sin(y * 1.2) * 2.5
        for x in range(W):
            d = bayer4(x, y)
            # Distance from sun reflection column
            dist_sun = abs(x - (sun_x + wave_phase))
            # Base water color
            water_col = blend(c_water_dark, c_water_mid, t * 0.6 + (d - 0.5) * 0.2)

            # Golden sun trail on water
            trail_width = 8 + t * 30
            if dist_sun < trail_width:
                rel = dist_sun / trail_width
                if rel < 0.25 and (y % 2 == 0 or d > 0.6):
                    water_col = c_water_glint if d > 0.8 else c_water_sun
                elif rel < 0.6 and (x + y) % 2 == 0:
                    water_col = c_water_gold
                elif rel < 1.0 and d > 0.5:
                    water_col = blend(c_water_gold, c_water_mid, rel)

            im.putpixel((x, y), water_col)

    # 4. Lift-net Rigging (Cầu vó kéo cá - Star of Photo 1)
    # Stilt chòi vó on left side at x=14..32, y=42..72
    c_tre_dark = hex_to_rgb('#1a0f0d')
    c_tre_mid  = hex_to_rgb('#3e2117')
    c_tre_warm = hex_to_rgb('#78350f')
    c_tre_gold = hex_to_rgb('#d97706')

    # Pilings (cọc tre cắm xuống sông)
    pilings = [(16, 44, 76), (22, 45, 80), (28, 44, 78), (34, 46, 82)]
    for px, py0, py1 in pilings:
        for y in range(py0, py1):
            im.putpixel((px, y), c_tre_dark)
            im.putpixel((px + 1, y), c_tre_mid if (px + y) % 2 == 0 else c_tre_dark)

    # Cross bracing
    for y_cross in [52, 62]:
        for x in range(16, 35):
            im.putpixel((x, y_cross), c_tre_dark)

    # Platform (sàn vó / chòi tre)
    for x in range(14, 36):
        im.putpixel((x, 44), c_tre_warm)
        im.putpixel((x, 45), c_tre_dark)
    # Small thatched shelter on stilts
    for y in range(36, 44):
        for x in range(15, 24):
            d = bayer4(x, y)
            im.putpixel((x, y), c_tre_warm if d > 0.4 else c_tre_mid)
    # Roof of shelter
    for x in range(13, 26):
        im.putpixel((x, 35), c_tre_dark)

    # Fisherman silhouette on platform
    for dy in range(0, 6):
        im.putpixel((27, 39 + dy), c_tre_dark)
    im.putpixel((27, 38), c_tre_dark) # head
    # Conical hat
    im.putpixel((27, 37), c_tre_dark)
    im.putpixel((26, 38), c_tre_dark)
    im.putpixel((28, 38), c_tre_dark)

    # Long bamboo crane arm / lever (Cần vó vươn ra sông)
    # Pivots at (x=28, y=43), rises up to (x=52, y=14), then extends to (x=68, y=24)
    lever_pts = []
    for step in range(36):
        t = step / 35.0
        lx = int(28 + 24 * t)
        ly = int(43 - 29 * t + 3 * (t ** 2))
        lever_pts.append((lx, ly))
        im.putpixel((lx, ly), c_tre_dark)
        if step % 2 == 0:
            im.putpixel((lx, ly - 1), c_tre_mid)

    for step in range(20):
        t = step / 19.0
        lx = int(52 + 16 * t)
        ly = int(14 + 10 * t)
        im.putpixel((lx, ly), c_tre_dark)

    # Suspension apex of the lift-net: (x=68, y=24)
    apex_x, apex_y = 68, 24
    im.putpixel((apex_x, apex_y), c_tre_gold)

    # 4 curved arched bamboo poles (Gọng vó uốn cong hình cánh cung vồng lên)
    # Reaching from apex to 4 corners of net:
    corners = [(42, 58), (92, 52), (54, 76), (88, 72)]
    for cx, cy in corners:
        # Curved arc
        for step in range(32):
            t = step / 31.0
            # Arched curve that bows upwards
            ax = int(apex_x + (cx - apex_x) * t)
            arch = math.sin(t * 3.1415) * 8.0 # upward bulge
            ay = int(apex_y + (cy - apex_y) * t - arch)
            if 0 <= ax < W and 0 <= ay < H:
                # Golden lit bamboo in sunset
                col = c_tre_gold if (ax + ay) % 2 == 0 else c_tre_dark
                im.putpixel((ax, ay), col)
                if t < 0.6 and ay > 0:
                    im.putpixel((ax, ay + 1), c_tre_dark)

    # Net mesh (Lưới vó căng giữa 4 gọng tre - translucent dither catching sunset gold)
    c_net_glow = hex_to_rgb('#fde047')
    c_net_dim  = hex_to_rgb('#b45309')
    # Fill the polygon roughly formed by the 4 corners with arched sag
    for y in range(54, 76):
        ty = (y - 54) / 22.0
        left_x = int(42 + (54 - 42) * ty)
        right_x = int(92 + (88 - 92) * ty)
        for x in range(left_x, right_x + 1):
            d = bayer4(x, y)
            # Net grid lines
            if (x % 3 == 0 or y % 3 == 0) and d > 0.45:
                # Catch sunset light
                net_col = c_net_glow if abs(x - sun_x) < 18 else c_net_dim
                im.putpixel((x, y), net_col)

    # Net perimeter rope
    for (x1, y1), (x2, y2) in [
        (corners[0], corners[1]), (corners[1], corners[3]),
        (corners[3], corners[2]), (corners[2], corners[0])
    ]:
        for step in range(25):
            t = step / 24.0
            rx = int(x1 + (x2 - x1) * t)
            ry = int(y1 + (y2 - y1) * t + math.sin(t * 3.14) * 2) # sag
            if 0 <= rx < W and 0 <= ry < H:
                im.putpixel((rx, ry), c_tre_dark)

    # Small sampan approaching in background
    for dx in range(-6, 7):
        t = dx / 6.0
        bx = 98 + dx
        by = int(50 - (1 - t * t) * 1.5)
        im.putpixel((bx, by), c_tre_dark)
    im.putpixel((97, 48), c_tre_dark) # person
    im.putpixel((97, 47), c_tre_warm) # hat

    return im

# =========================================================================
# ART 3: ch3 - Chợ nổi Cái Răng thuyền ghe hoa trái & Cây bẹo (117x96)
# =========================================================================
def draw_ch3():
    W, H = 117, 96
    im = Image.new('RGB', (W, H))

    # 1. Morning Dawn Sky & Mist (y: 0..30)
    c_sky_top = hex_to_rgb('#709775')
    c_sky_mid = hex_to_rgb('#a1cca5')
    c_sky_peach=hex_to_rgb('#fed7aa')
    c_mist    = hex_to_rgb('#fef3c7')

    for y in range(0, 28):
        t = y / 28.0
        c = blend(c_sky_top, c_sky_peach, t)
        for x in range(W):
            d = bayer4(x, y) - 0.5
            im.putpixel((x, y), blend(c, c_mist, d * 0.2))

    # Distant riverbanks with coconut silhouettes in early morning mist
    c_mist_trees = hex_to_rgb('#406343')
    for x in range(W):
        th = int(22 + 3 * math.sin(x * 0.15) + 1.5 * math.cos(x * 0.35))
        for y in range(th, 30):
            d = bayer4(x, y)
            im.putpixel((x, y), blend(c_mist_trees, c_mist, d * 0.35))

    # 2. Morning river water with waking ripples (y: 28..96)
    c_water_far = hex_to_rgb('#52796f')
    c_water_mid = hex_to_rgb('#354f52')
    c_water_near= hex_to_rgb('#2f3e46')
    c_wake_foam = hex_to_rgb('#e0f2fe')

    for y in range(28, H):
        t = (y - 28) / 68.0
        for x in range(W):
            wave = math.sin(x * 0.35 + y * 0.7) * 0.1
            base_w = blend(c_water_far, c_water_near, t + wave)
            d = bayer4(x, y)
            im.putpixel((x, y), blend(base_w, c_water_mid, (d - 0.5) * 0.2))

    # 3. Main Cargo Boat (Ghe Bầu chở nông sản) in center-midground
    # Position: x=18..72, y=38..62
    gx0, gy0 = 45, 48
    c_hull_dark = hex_to_rgb('#3e2723')
    c_hull_wood = hex_to_rgb('#6d4c41')
    c_hull_rim  = hex_to_rgb('#a1887f')
    c_hull_stripe=hex_to_rgb('#b71c1c') # red waterline stripe

    for i in range(-25, 26):
        t = i / 25.0
        bx = gx0 + i
        by = int(gy0 + t * 2 - (1 - t * t) * 3)
        bw = int(6.5 * (1 - (t * 0.9) ** 2))
        for w in range(-bw, bw + 1):
            px, py = bx, by + w
            if 0 <= px < W and 0 <= py < H:
                if w == bw:
                    im.putpixel((px, py), c_hull_rim)
                elif w == bw - 1:
                    im.putpixel((px, py), c_hull_stripe)
                else:
                    im.putpixel((px, py), c_hull_wood if i % 3 != 0 else c_hull_dark)

    # Boat cabin / mui thuyền
    c_canvas = hex_to_rgb('#fef08a')
    c_canvas_sh = hex_to_rgb('#ca8a04')
    for y in range(gy0 - 8, gy0 - 1):
        for x in range(gx0 - 18, gx0 - 2):
            d = bayer4(x, y)
            im.putpixel((x, y), c_canvas if d > 0.4 else c_canvas_sh)

    # Mounds of tropical fruits on the cargo boat:
    # Green Watermelons (Dưa hấu)
    c_melon_dark = hex_to_rgb('#14532d')
    c_melon_light= hex_to_rgb('#22c55e')
    for (mx, my) in [(gx0 + 2, gy0 - 3), (gx0 + 7, gy0 - 4), (gx0 + 12, gy0 - 3),
                     (gx0 + 5, gy0 - 6), (gx0 + 10, gy0 - 7), (gx0 + 15, gy0 - 4)]:
        for dy in range(-2, 3):
            for dx in range(-2, 3):
                if dx * dx + dy * dy <= 4:
                    px, py = mx + dx, my + dy
                    if 0 <= px < W and 0 <= py < H:
                        col = c_melon_light if (dx + dy) % 2 == 0 else c_melon_dark
                        im.putpixel((px, py), col)

    # Golden Pineapples / Khóm Cầu Đúc
    c_pine_gold = hex_to_rgb('#eab308')
    c_pine_leaf = hex_to_rgb('#15803d')
    for (px, py) in [(gx0 + 18, gy0 - 3), (gx0 + 21, gy0 - 4), (gx0 + 19, gy0 - 7)]:
        im.putpixel((px, py), c_pine_gold)
        im.putpixel((px, py - 1), c_pine_gold)
        im.putpixel((px - 1, py), c_pine_gold)
        im.putpixel((px, py - 2), c_pine_leaf)

    # CÂY BẸO - High bamboo pole erected at bow with advertised fruits hanging!
    # Iconic soul of Mekong floating markets
    pole_x = gx0 + 24
    for y in range(12, gy0):
        im.putpixel((pole_x, y), hex_to_rgb('#ca8a04'))
        if y % 3 == 0:
            im.putpixel((pole_x, y), hex_to_rgb('#78350f'))

    # Hanging samples on Cây Bẹo:
    # 1. Hanging watermelon at top
    im.putpixel((pole_x - 2, 16), c_melon_dark)
    im.putpixel((pole_x - 1, 15), c_melon_light)
    im.putpixel((pole_x - 1, 16), c_melon_dark)
    im.putpixel((pole_x - 1, 17), c_melon_light)
    im.putpixel((pole_x - 2, 16), c_melon_dark)
    # String
    im.putpixel((pole_x - 1, 14), hex_to_rgb('#ffffff'))
    im.putpixel((pole_x, 14), hex_to_rgb('#ffffff'))

    # 2. Hanging pineapple below
    im.putpixel((pole_x - 1, 22), c_pine_gold)
    im.putpixel((pole_x - 2, 23), c_pine_gold)
    im.putpixel((pole_x - 1, 23), c_pine_gold)
    im.putpixel((pole_x - 1, 21), c_pine_leaf)
    im.putpixel((pole_x, 21), hex_to_rgb('#ffffff'))

    # 4. Foreground buying sampan (x=50..105, y=65..88)
    bx0, by0 = 78, 76
    for i in range(-20, 21):
        t = i / 20.0
        bx = bx0 + i
        by = int(by0 + t * 1.5 - (1 - t * t) * 2.5)
        bw = int(4.5 * (1 - (t * 0.88) ** 2))
        for w in range(-bw, bw + 1):
            px, py = bx, by + w
            if 0 <= px < W and 0 <= py < H:
                if abs(w) == bw:
                    im.putpixel((px, py), hex_to_rgb('#854d0e'))
                else:
                    im.putpixel((px, py), hex_to_rgb('#543618') if i % 3 == 0 else hex_to_rgb('#713f12'))

    # Fruit trader standing in sampan with nón lá and áo bà ba
    tx, ty = bx0 - 6, by0 - 4
    # Áo bà ba hồng/cam
    c_ao_pink = hex_to_rgb('#f43f5e')
    for dy in range(0, 5):
        for dx in range(-2, 3):
            im.putpixel((tx + dx, ty + dy), c_ao_pink if dx == 0 else hex_to_rgb('#be123c'))
    # Nón lá
    im.putpixel((tx, ty - 4), hex_to_rgb('#fffbeb'))
    for dy, hw in [(-3, 1), (-2, 2), (-1, 3)]:
        for dx in range(-hw, hw + 1):
            im.putpixel((tx + dx, ty + dy), hex_to_rgb('#fef08a') if abs(dx) < hw else hex_to_rgb('#eab308'))

    # Long wooden paddle
    for step in range(-8, 9):
        px = tx - 3 + step
        py = ty + 2 + int(step * 0.9)
        if 0 <= px < W and 0 <= py < H:
            im.putpixel((px, py), hex_to_rgb('#b45309'))

    # Second buyer in front with conical hat
    tx2, ty2 = bx0 + 10, by0 - 2
    for dy in range(0, 4):
        im.putpixel((tx2, ty2 + dy), hex_to_rgb('#0284c7'))
    im.putpixel((tx2, ty2 - 3), hex_to_rgb('#fef08a'))
    im.putpixel((tx2 - 1, ty2 - 2), hex_to_rgb('#fef08a'))
    im.putpixel((tx2 + 1, ty2 - 2), hex_to_rgb('#fef08a'))

    # Water wake & foam
    for step in range(-12, 13):
        wx = bx0 + step + 4
        wy = by0 + 6 + int(abs(step) * 0.2)
        if 0 <= wx < W and 0 <= wy < H:
            im.putpixel((wx, wy), c_wake_foam)

    return im

# =========================================================================
# ART 4: ch4 - Cánh đồng lúa chín vàng & Cây thốt nốt Thất Sơn (117x96)
# =========================================================================
def draw_ch4():
    W, H = 117, 96
    im = Image.new('RGB', (W, H))

    # 1. Twilight sky over An Giang (y: 0..40)
    c_sky_top = hex_to_rgb('#312e81') # indigo
    c_sky_mid = hex_to_rgb('#7c3aed') # violet
    c_sky_warm= hex_to_rgb('#fb923c') # warm peach
    c_sky_gold= hex_to_rgb('#fef08a') # horizon gold

    for y in range(0, 38):
        t = y / 38.0
        if t < 0.4:
            base_c = blend(c_sky_top, c_sky_mid, t / 0.4)
        elif t < 0.75:
            base_c = blend(c_sky_mid, c_sky_warm, (t - 0.4) / 0.35)
        else:
            base_c = blend(c_sky_warm, c_sky_gold, (t - 0.75) / 0.25)

        for x in range(W):
            d = (bayer4(x, y) - 0.5) * 0.2
            im.putpixel((x, y), blend(base_c, c_sky_gold, max(0.0, d)))

    # 2. Layered Dãy Núi Thất Sơn (That Son Seven Mountains)
    # Distant ridge (y: 22..38)
    c_mount_far = hex_to_rgb('#3730a3')
    for x in range(W):
        # 3 distinctive peaks: Nui Cam, Nui Sam, Nui Ket
        h1 = 12 * math.exp(-((x - 30) / 16.0) ** 2)
        h2 = 15 * math.exp(-((x - 65) / 22.0) ** 2)
        h3 = 10 * math.exp(-((x - 100) / 18.0) ** 2)
        peak_y = int(35 - max(h1, max(h2, h3)))
        for y in range(peak_y, 40):
            d = bayer4(x, y)
            im.putpixel((x, y), blend(c_mount_far, hex_to_rgb('#6366f1'), d * 0.25))

    # Near ridge (y: 32..44)
    c_mount_near = hex_to_rgb('#1e1b4b')
    for x in range(W):
        h_near = 8 * math.exp(-((x - 48) / 28.0) ** 2) + 6 * math.exp(-((x - 85) / 20.0) ** 2)
        peak_y = int(40 - h_near)
        for y in range(peak_y, 45):
            im.putpixel((x, y), c_mount_near)

    # 3. Flocks of White Storks (Đàn cò trắng bay lượn)
    storks = [(24, 18), (32, 14), (39, 19), (48, 16), (56, 21)]
    c_stork = hex_to_rgb('#ffffff')
    c_stork_sh = hex_to_rgb('#cbd5e1')
    for sx, sy in storks:
        # V-shaped stork wings in flight
        im.putpixel((sx, sy), c_stork)
        im.putpixel((sx - 1, sy - 1), c_stork)
        im.putpixel((sx - 2, sy - 2), c_stork_sh)
        im.putpixel((sx + 1, sy - 1), c_stork)
        im.putpixel((sx + 2, sy - 2), c_stork_sh)
        im.putpixel((sx, sy + 1), c_stork_sh)

    # 4. Golden Ripened Rice Fields (Cánh đồng lúa chín vàng) (y: 44..96)
    c_rice_deep = hex_to_rgb('#854d0e')
    c_rice_mid  = hex_to_rgb('#ca8a04')
    c_rice_gold = hex_to_rgb('#eab308')
    c_rice_ripe = hex_to_rgb('#fde047')
    c_dyke_green= hex_to_rgb('#15803d')

    for y in range(44, H):
        t = (y - 44) / 52.0
        for x in range(W):
            # Gentle rolling wind waves across the rice field
            wave = math.sin(x * 0.2 + y * 0.5) * 0.15 + math.cos(x * 0.08 - y * 0.2) * 0.1
            base_rice = blend(c_rice_mid, c_rice_ripe, t + wave)
            d = bayer4(x, y)
            col = blend(c_rice_deep, base_rice, d)

            # Curved dyke / bờ ruộng
            dyke1_y = int(58 + math.sin(x * 0.05) * 4)
            dyke2_y = int(76 - math.cos(x * 0.04) * 5)
            if y == dyke1_y or y == dyke2_y:
                col = c_dyke_green
            elif abs(y - dyke1_y) == 1 or abs(y - dyke2_y) == 1:
                col = blend(c_dyke_green, col, 0.5)

            # Rice grain highlights
            if (x * 3 + y * 5) % 11 == 0 and d > 0.6:
                col = c_rice_ripe

            im.putpixel((x, y), col)

    # Small winding irrigation canal
    for y in range(60, H):
        t = (y - 60) / 36.0
        cx = int(22 + 15 * math.sin(t * 3.14) + t * 8)
        for w in range(-2, 3):
            px = cx + w
            if 0 <= px < W:
                d = bayer4(px, y)
                im.putpixel((px, y), hex_to_rgb('#1e3a8a') if d < 0.5 else hex_to_rgb('#38bdf8'))

    # 5. Iconic Thốt Nốt Palms (Cây thốt nốt An Giang)
    # Tall, slender trunks with distinctive spherical starburst palmate crowns
    palms = [(86, 68, 48), (96, 64, 44), (106, 72, 52)] # (x, base_y, height)
    c_thotnot_trunk = hex_to_rgb('#18181b')
    c_thotnot_leaf1 = hex_to_rgb('#052e16')
    c_thotnot_leaf2 = hex_to_rgb('#14532d')
    c_thotnot_leaf3 = hex_to_rgb('#22c55e')

    for px, py, h in palms:
        # Slender trunk
        crown_y = py - h
        for y in range(crown_y, py):
            im.putpixel((px, y), c_thotnot_trunk)
            if (px + y) % 3 == 0:
                im.putpixel((px + 1, y), c_thotnot_trunk)

        # Round starburst crown
        cr_r = 7
        for dy in range(-cr_r, cr_r + 1):
            for dx in range(-cr_r, cr_r + 1):
                dist2 = dx * dx + dy * dy
                if dist2 <= cr_r * cr_r:
                    lx, ly = px + dx, crown_y + dy
                    if 0 <= lx < W and 0 <= ly < H:
                        d = bayer4(lx, ly)
                        # Radial leaf spikes
                        angle = math.atan2(dy, dx)
                        spike = math.sin(angle * 8.0)
                        if spike > 0.1 or dist2 < 12:
                            leaf_c = c_thotnot_leaf3 if d > 0.8 else (c_thotnot_leaf2 if d > 0.4 else c_thotnot_leaf1)
                            im.putpixel((lx, ly), leaf_c)

    return im

# =========================================================================
# ART 5: pond - Đóa hoa sen hồng Đồng Tháp Mười, xuồng sen & Thất Sơn (163x225)
# =========================================================================
def draw_pond():
    W, H = 163, 225
    im = Image.new('RGB', (W, H))

    # 1. Upper Sky & That Son Mountains (y: 0..65)
    c_sky_0 = hex_to_rgb('#312e81')
    c_sky_1 = hex_to_rgb('#6366f1')
    c_sky_2 = hex_to_rgb('#f472b6')
    c_sky_3 = hex_to_rgb('#fef08a')

    for y in range(0, 52):
        t = y / 52.0
        if t < 0.35:
            col = blend(c_sky_0, c_sky_1, t / 0.35)
        elif t < 0.7:
            col = blend(c_sky_1, c_sky_2, (t - 0.35) / 0.35)
        else:
            col = blend(c_sky_2, c_sky_3, (t - 0.7) / 0.3)

        for x in range(W):
            d = (bayer4(x, y) - 0.5) * 0.18
            im.putpixel((x, y), blend(col, c_sky_3, max(0.0, d)))

    # Majestic That Son peaks (y: 35..60)
    c_ts_far  = hex_to_rgb('#3730a3')
    c_ts_near = hex_to_rgb('#1e1b4b')
    for x in range(W):
        h_m = 18 * math.exp(-((x - 55) / 28.0) ** 2) + 22 * math.exp(-((x - 110) / 36.0) ** 2)
        my = int(54 - h_m)
        for y in range(my, 58):
            d = bayer4(x, y)
            im.putpixel((x, y), blend(c_ts_far, c_ts_near, d))

    # 2. Vast Dong Thap Muoi Lotus Marsh in Midground (y: 56..125)
    c_marsh_water = hex_to_rgb('#134e4a')
    c_marsh_pad1  = hex_to_rgb('#065f46')
    c_marsh_pad2  = hex_to_rgb('#10b981')
    c_lotus_dot   = hex_to_rgb('#f472b6')
    c_lotus_dot_w = hex_to_rgb('#ffffff')

    for y in range(56, 125):
        t = (y - 56) / 69.0
        for x in range(W):
            d = bayer4(x, y)
            # Water base
            col = blend(hex_to_rgb('#0f766e'), c_marsh_water, t)

            # Carpet of thousands of lotus pads
            pad_noise = math.sin(x * 0.4 + y * 0.3) + math.cos(x * 0.25 - y * 0.4)
            if pad_noise > 0.1:
                col = c_marsh_pad2 if d > 0.7 else c_marsh_pad1

            # Sparkling pink lotus dots across the marsh
            if (x * 7 + y * 13) % 29 == 0 and pad_noise > 0.2:
                col = c_lotus_dot_w if d > 0.6 else c_lotus_dot

            im.putpixel((x, y), col)

    # 3. Wooden Sampan harvesting lotus in middle marsh (Photo 3)
    # Position: x=65..120, y=78..95
    bx0, by0 = 92, 86
    c_sampan_wood = hex_to_rgb('#451a03')
    c_sampan_rim  = hex_to_rgb('#78350f')

    for i in range(-20, 21):
        t = i / 20.0
        bx = bx0 + i
        by = int(by0 + t * 1.2 - (1 - t * t) * 2.2)
        bw = int(3.8 * (1 - (t * 0.88) ** 2))
        for w in range(-bw, bw + 1):
            px, py = bx, by + w
            if 0 <= px < W and 0 <= py < H:
                im.putpixel((px, py), c_sampan_rim if abs(w) == bw else c_sampan_wood)

    # Harvested Lotus / Water lily fan on boat (Bông súng xòe cánh quạt - Photo 3)
    for a_deg in range(-60, 61, 15):
        rad = math.radians(a_deg)
        for st in range(4, 14):
            fx = int(bx0 + 6 + st * math.cos(rad))
            fy = int(by0 - 1 + st * math.sin(rad) * 0.6)
            if 0 <= fx < W and 0 <= fy < H:
                im.putpixel((fx, fy), hex_to_rgb('#db2777') if st > 9 else hex_to_rgb('#f472b6'))

    # Vietnamese woman in Nón lá rowing sampan
    wx, wy = bx0 - 8, by0 - 4
    for dy in range(0, 4):
        im.putpixel((wx, wy + dy), hex_to_rgb('#047857')) # áo bà ba xanh ngọc
    # Nón lá
    im.putpixel((wx, wy - 3), hex_to_rgb('#fffbeb'))
    im.putpixel((wx - 1, wy - 2), hex_to_rgb('#fef08a'))
    im.putpixel((wx, wy - 2), hex_to_rgb('#fef08a'))
    im.putpixel((wx + 1, wy - 2), hex_to_rgb('#fef08a'))
    # Slender paddle
    for p_step in range(-6, 7):
        im.putpixel((wx + p_step, wy + 2 + p_step), hex_to_rgb('#b45309'))

    # 4. LOWER HALF: Masterpiece Close-Up Blooming Lotus (Photo 4)
    # Center of flower: (cx=82, cy=170)
    cx, cy = 82, 172

    # Clear river water with alluvium reflection below (y: 125..225)
    c_water_deep = hex_to_rgb('#064e3b')
    c_water_sediment = hex_to_rgb('#115e59')
    for y in range(125, H):
        t = (y - 125) / 100.0
        for x in range(W):
            d = bayer4(x, y)
            im.putpixel((x, y), blend(c_water_deep, c_water_sediment, t + (d - 0.5) * 0.15))

    # Giant circular lotus pad (Lá sen tiền cảnh) on the left/right
    # Left pad: center=(34, 182), radius=38
    for dy in range(-34, 35):
        for dx in range(-38, 39):
            dist2 = dx * dx + (dy * 1.5) ** 2
            if dist2 <= 38 * 38:
                px, py = 34 + dx, 182 + dy
                if 0 <= px < W and 0 <= py < H:
                    # Veins radiating from center
                    ang = math.atan2(dy, dx)
                    vein = math.sin(ang * 12.0)
                    d = bayer4(px, py)
                    if dist2 > 36 * 36:
                        im.putpixel((px, py), hex_to_rgb('#064e3b'))
                    elif vein > 0.7:
                        im.putpixel((px, py), hex_to_rgb('#34d399'))
                    else:
                        im.putpixel((px, py), hex_to_rgb('#059669') if d > 0.5 else hex_to_rgb('#10b981'))

    # Sparkling Morning Dewdrop on left lotus pad
    im.putpixel((34, 180), hex_to_rgb('#ffffff'))
    im.putpixel((35, 180), hex_to_rgb('#ffffff'))
    im.putpixel((34, 181), hex_to_rgb('#67e8f9'))
    im.putpixel((35, 181), hex_to_rgb('#06b6d4'))

    # Right lotus pad: center=(136, 195), radius=34
    for dy in range(-30, 31):
        for dx in range(-34, 35):
            dist2 = dx * dx + (dy * 1.5) ** 2
            if dist2 <= 34 * 34:
                px, py = 136 + dx, 195 + dy
                if 0 <= px < W and 0 <= py < H:
                    d = bayer4(px, py)
                    im.putpixel((px, py), hex_to_rgb('#047857') if d > 0.5 else hex_to_rgb('#10b981'))

    # THE GRAND LOTUS FLOWER (Hoa Sen Hồng Đồng Tháp Mười):
    # Petal colors (from pure white-pink base to vibrant magenta tips):
    c_pt_white = hex_to_rgb('#ffffff')
    c_pt_pale  = hex_to_rgb('#fce7f3')
    c_pt_pink1 = hex_to_rgb('#fbcfe8')
    c_pt_pink2 = hex_to_rgb('#f472b6')
    c_pt_rose  = hex_to_rgb('#ec4899')
    c_pt_deep  = hex_to_rgb('#be185d')
    c_pt_crimson=hex_to_rgb('#831843')

    # Draw individual petals radiating out from (cx, cy)
    # Background petals (outer layer)
    outer_angles = [-140, -115, -90, -65, -40, -15, 15, 40, 65, 90, 115, 140, 165, -165]
    for ang_deg in outer_angles:
        rad = math.radians(ang_deg)
        length = 34 if abs(ang_deg) > 70 else 38
        width = 11
        for step in range(length):
            t = step / float(length)
            px_c = cx + step * math.sin(rad)
            py_c = cy - step * math.cos(rad) * 0.85
            # Petal curve width
            w_curr = int(width * math.sin(t * 3.1415))
            perp_rad = rad + math.pi / 2
            for w in range(-w_curr, w_curr + 1):
                px = int(px_c + w * math.cos(perp_rad))
                py = int(py_c + w * math.sin(perp_rad))
                if 0 <= px < W and 0 <= py < H:
                    # Color gradient along petal from center out
                    d = bayer4(px, py)
                    if t > 0.85:
                        col = c_pt_crimson if abs(w) == w_curr else c_pt_deep
                    elif t > 0.6:
                        col = c_pt_rose if d > 0.5 else c_pt_pink2
                    elif t > 0.35:
                        col = c_pt_pink2 if d > 0.5 else c_pt_pink1
                    else:
                        col = c_pt_pale if d > 0.5 else c_pt_white
                    im.putpixel((px, py), col)

    # Foreground petals (inner cupping layer)
    inner_angles = [-100, -75, -50, -25, 0, 25, 50, 75, 100]
    for ang_deg in inner_angles:
        rad = math.radians(ang_deg)
        length = 26
        width = 9
        for step in range(length):
            t = step / float(length)
            px_c = cx + step * math.sin(rad)
            py_c = cy - step * math.cos(rad) * 0.92
            w_curr = int(width * math.sin(t * 3.1415))
            perp_rad = rad + math.pi / 2
            for w in range(-w_curr, w_curr + 1):
                px = int(px_c + w * math.cos(perp_rad))
                py = int(py_c + w * math.sin(perp_rad))
                if 0 <= px < W and 0 <= py < H:
                    d = bayer4(px, py)
                    if t > 0.8:
                        col = c_pt_deep if abs(w) == w_curr else c_pt_rose
                    elif t > 0.5:
                        col = c_pt_pink2 if d > 0.5 else c_pt_pink1
                    elif t > 0.25:
                        col = c_pt_pink1 if d > 0.5 else c_pt_pale
                    else:
                        col = c_pt_white
                    im.putpixel((px, py), col)

    # Flower Center: Glowing Jade Seed Pod (Đài sen xanh ngọc) & Golden Stamens (Nhụy vàng)
    c_seed_pod_rim  = hex_to_rgb('#15803d')
    c_seed_pod_core = hex_to_rgb('#4ade80')
    c_stamen_gold   = hex_to_rgb('#facc15')
    c_stamen_bright = hex_to_rgb('#fef08a')
    c_seed_hole     = hex_to_rgb('#14532d')

    # Golden stamens ring
    for r in range(8, 13):
        for a_step in range(24):
            rad = a_step * (2 * math.pi / 24.0)
            sx = int(cx + r * math.cos(rad))
            sy = int(cy + r * math.sin(rad) * 0.65)
            if 0 <= sx < W and 0 <= sy < H:
                im.putpixel((sx, sy), c_stamen_bright if a_step % 2 == 0 else c_stamen_gold)

    # Jade seed pod
    for dy in range(-5, 6):
        for dx in range(-7, 8):
            if dx * dx + (dy * 1.5) ** 2 <= 36:
                px, py = cx + dx, cy + dy
                if 0 <= px < W and 0 <= py < H:
                    d = bayer4(px, py)
                    im.putpixel((px, py), c_seed_pod_rim if d < 0.35 else c_seed_pod_core)

    # Seed holes in pod
    for (hx, hy) in [(-4, -1), (0, -2), (4, -1), (-2, 1), (2, 1), (0, 3)]:
        im.putpixel((cx + hx, cy + hy), c_seed_hole)
        im.putpixel((cx + hx + 1, cy + hy), hex_to_rgb('#86efac'))

    return im

def main():
    out_dir = '/Users/btvdev/DEV/btvdev03.github.io/public/art'
    os.makedirs(out_dir, exist_ok=True)

    arts = {
        'ch1': draw_ch1(),
        'ch2': draw_ch2(),
        'ch3': draw_ch3(),
        'ch4': draw_ch4(),
        'pond': draw_pond(),
    }

    base64_dict = {}
    for name, img in arts.items():
        png_path = os.path.join(out_dir, f'{name}.png')
        img.save(png_path, format='PNG', optimize=True)
        with open(png_path, 'rb') as f:
            b64_str = base64.b64encode(f.read()).decode('utf-8')
            base64_dict[name] = f'data:image/png;base64,{b64_str}'
        print(f'Saved {png_path} ({img.size[0]}x{img.size[1]}) - Base64 len: {len(base64_dict[name])}')

    # Output formatted JS object
    js_file = '/Users/btvdev/DEV/btvdev03.github.io/art_base64.js'
    with open(js_file, 'w') as f:
        f.write('const ART = {\n')
        for k, v in base64_dict.items():
            f.write(f"  {k}: '{v}',\n")
        f.write('};\n')
    print(f'Wrote JS dictionary to {js_file}')

if __name__ == '__main__':
    main()
