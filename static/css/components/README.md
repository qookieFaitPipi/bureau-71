# Правила написания CSS для компонентов

## Важно: Изоляция стилей

Все классы в CSS файле компонента **ОБЯЗАТЕЛЬНО** должны начинаться с обертки компонента.

### Правильно ✅

```css
/* header.css */
.header .content {
    background: red;
}

.header .button {
    color: white;
}
```

### Неправильно ❌

```css
/* header.css */
.content {
    background: red;  /* Применится ко ВСЕМ .content на странице! */
}

.button {
    color: white;  /* Применится ко ВСЕМ .button на странице! */
}
```

## Структура

- `header.css` → все классы с префиксом `.header`
- `footer.css` → все классы с префиксом `.footer`
- `content.css` → все классы с префиксом `.content`
- и т.д.

## Пример использования

В `header.html`:
```html
<header class="header">
    <div class="content">Текст</div>
    <button class="button">Кнопка</button>
</header>
```

В `header.css`:
```css
.header .content {
    color: white;
}

.header .button {
    background: blue;
}
```

Теперь классы `content` и `button` можно использовать в других компонентах без конфликтов!

