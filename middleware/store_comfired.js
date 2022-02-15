export default function ({ context, store, redirect, route }) {
  if (store.state.ip.length === 0) {
    console.log("From Middleware - Store IP = 0 , User ===> /Cards");
    // 可以導向到其他頁面
    return redirect('/cards')
  }
}