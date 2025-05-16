  // hex 색상의 밝기 계산
  export function isColorDark(hexColor: string): boolean {
    // #RGB → #RRGGBB 변환
    if (hexColor.length === 4) {
      hexColor =
        '#' +
        hexColor[1] + hexColor[1] +
        hexColor[2] + hexColor[2] +
        hexColor[3] + hexColor[3]
    }

    const r = parseInt(hexColor.substr(1, 2), 16)
    const g = parseInt(hexColor.substr(3, 2), 16)
    const b = parseInt(hexColor.substr(5, 2), 16)

    const brightness = (r * 299 + g * 587 + b * 114) / 1000
    return brightness < 170 // 128
  }
