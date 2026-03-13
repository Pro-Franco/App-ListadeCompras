# Bem vindo ao App-ListaDeCompras 👋

## Criando git do projeto
```bash
   git init
   git add README.md
   git commit -m "first commit"
   git branch -M main
   git remote add origin https://github.com/Pro-Franco/App-ListadeCompras.git
   git push -u origin main
```

## Iniciando Projeto

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```
## Baixando repositório
```bash
   git remote add origin https://github.com/Pro-Franco/App-ListadeCompras.git
   git branch -M main
   git push -u origin main
```


## Tipagem TypeScript

```bash
   type ItemCompra = {
      id: string
      nome: string
      comprado: boolean
   }
``` 


## Estado
```bash
useState<ItemCompra[]>([])
```

## Manipulação de listas
```bash
   map()
   filter()
```

## Eventos
```bash
   onPress
   onChangeText
```