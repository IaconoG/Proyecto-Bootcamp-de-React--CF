# Commitlint Setup

## 📋 Conventional Commits

Este proyecto usa [Conventional Commits](https://www.conventionalcommits.org/) para mantener un historial de commits limpio y semántico.

## 🎯 Formato de Commits

```
type(scope): subject

body (opcional)

footer (opcional)
```

### Types Permitidos

- **feat**: Nueva funcionalidad
- **fix**: Corrección de bug
- **docs**: Cambios en documentación
- **style**: Cambios de formato (espacios, punto y coma, etc)
- **refactor**: Refactorización de código
- **perf**: Mejoras de performance
- **test**: Agregar o corregir tests
- **build**: Cambios en el sistema de build
- **ci**: Cambios en CI/CD
- **chore**: Tareas de mantenimiento
- **revert**: Revertir un commit previo

### Scopes Recomendados

- `sidebar` - Cambios en el sidebar
- `forms` - Cambios en formularios
- `hooks` - Cambios en hooks
- `styles` - Cambios en estilos
- `config` - Cambios en configuración
- `state` - Cambios en state management
- `icons` - Cambios en iconos
- `utils` - Cambios en utilidades

## 📦 Instalación

```bash
npm install
npm run prepare
```

Esto instalará las dependencias y configurará Husky para validar commits automáticamente.

## ✅ Ejemplos de Commits Válidos

```bash
# Feature
git commit -m "feat(sidebar): add collapse animation"

# Bug fix
git commit -m "fix(forms): resolve validation error on empty input"

# Refactor
git commit -m "refactor(hooks): simplify useForm logic"

# Style
git commit -m "style(sidebar): improve spacing and colors"

# Documentation
git commit -m "docs(readme): add setup instructions"

# Breaking change
git commit -m "feat(api)!: change endpoint structure

BREAKING CHANGE: API endpoints now use v2 format"
```

## ❌ Ejemplos de Commits Inválidos

```bash
# Sin tipo
git commit -m "add new feature"

# Tipo inválido
git commit -m "feature(sidebar): add collapse"

# Sin scope cuando es necesario
git commit -m "feat: add something"

# Subject con mayúscula
git commit -m "feat(forms): Add validation"

# Subject con punto final
git commit -m "feat(forms): add validation."

# Subject muy largo (> 100 caracteres)
git commit -m "feat(sidebar): this is a very long commit message that exceeds the maximum allowed length..."
```

## 🔧 Validación Manual

Para validar un commit manualmente:

```bash
echo "feat(sidebar): add collapse animation" | npx commitlint
```

## 🚀 Workflow Recomendado

1. Hacer cambios en tu código
2. Stagear los cambios: `git add .`
3. Hacer commit con formato correcto: `git commit -m "feat(scope): description"`
4. Si el commit es inválido, Husky lo rechazará automáticamente
5. Corregir el mensaje y reintentar

## 📝 Commit Interactivo (Opcional)

Para ayuda con el formato, puedes usar:

```bash
npx git-cz
```

Esto abrirá un prompt interactivo que te guiará en la creación del commit.

## 🔍 Verificar Configuración

```bash
# Ver configuración de commitlint
cat .commitlintrc.json

# Verificar que Husky está instalado
ls .husky
```

## 💡 Tips

- Usa verbos en imperativo: "add" no "adds" o "added"
- Mantén el subject breve (< 50 caracteres idealmente)
- Usa el body para explicar el "qué" y el "por qué"
- Usa el footer para referencias a issues: "Closes #123"
- Para breaking changes, usa `!` después del scope: `feat(api)!:`

## 📚 Recursos

- [Conventional Commits](https://www.conventionalcommits.org/)
- [Commitlint](https://commitlint.js.org/)
- [Husky](https://typicode.github.io/husky/)
