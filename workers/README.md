> For Dev eloper:
>
> 调试时请修改 `wrangler.jsonc` 的数据库数据为自己的，使用npm command初始化时请指定`<数据库名> <数据库位置>`参数（位置为`--local`或者`--remote`）。

```txt
npm install
npm run dev
```

```txt
npm run deploy
```

[For generating/synchronizing types based on your Worker configuration run](https://developers.cloudflare.com/workers/wrangler/commands/#types):

```txt
npm run cf-typegen
```

Pass the `CloudflareBindings` as generics when instantiation `Hono`:

```ts
// src/index.ts
const app = new Hono<{ Bindings: CloudflareBindings }>();
```
