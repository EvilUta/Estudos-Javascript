document.querySelectorAll('.tag').forEach(box => {
    const tagName = box.tagName.toLowerCase()
    box.style.borderColor = "#0e85fdc4"
    box.style.backgroundColor = "rgba(250, 250, 250, 0.91)"
    box.style.borderRadius = "12px"

    if (!box.classList.contains('nolabel')) {
        const label = document.createElement('label')
        label.innerHTML = tagName
        label.style.color = "#fff"
        label.style.padding = "6px 12px"
        label.style.fontSize = "1rem"
        label.style.borderRadius = "12px"

        // 🎨 Cores diferentes para cada tipo de tag
        switch (tagName) {
            case 'header':
                label.style.backgroundColor = '#f94144' // vermelho
                break
            case 'nav':
                label.style.backgroundColor = '#f3722c' // laranja
                break
            case 'main':
                label.style.backgroundColor = '#43aa8b' // verde
                break
            case 'footer':
                label.style.backgroundColor = '#577590' // azul
                break
            default:
                label.style.backgroundColor = '#999' // cor padrão
        }

        box.insertBefore(label, box.firstChild)
    }
})

