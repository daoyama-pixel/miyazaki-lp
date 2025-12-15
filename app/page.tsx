export default function Home() {
  const HTML = `
  <article class="space-y-12">

    <!-- =========================
         TOP（ページ上：FV）
         ========================= -->
    <header class="space-y-5">
      <!-- ヒーロー -->
      <img
        src="/images/ヒーロー画像_1215.webp"
        alt="東京〜宮崎 サウンドミステリーツアー"
        class="w-full h-auto rounded-2xl"
      />

      <!-- タイトル -->
      <div class="text-center space-y-2">
        <p class="inline-block rounded-full px-4 py-1 text-sm font-bold border">
          音 × AR でめぐる
        </p>
        <h1 class="text-2xl md:text-3xl font-bold leading-snug">
          東京〜宮崎<br />サウンドミステリーツアー
        </h1>
        <p class="text-sm opacity-80">
          音をつかったスタンプラリーを体験してみよう！
        </p>
      </div>

      <!-- 東京/宮崎（任意：元LP踏襲） -->
      <div class="grid grid-cols-2 gap-3">
        <a href="#tokyo" class="rounded-2xl border py-4 text-center font-bold">
          東京編を聞く！
        </a>
        <a href="#miyazaki" class="rounded-2xl border py-4 text-center font-bold">
          宮崎編を聞く！
        </a>
      </div>

      <!-- メインCTA（画像ボタン） -->
      <a href="#" class="block">
        <img src="/images/CTAボタン用.webp" alt="無料で始める" class="w-full h-auto" />
      </a>

      <!-- ストアボタン（任意：元LP踏襲） -->
      <div class="grid grid-cols-2 gap-3">
        <a href="#" class="block">
          <img src="/images/iOSCTA.webp" alt="App Storeでダウンロード" class="w-full h-auto" />
        </a>
        <a href="#" class="block">
          <img src="/images/Googleボタン.webp" alt="Google Playで手に入れよう" class="w-full h-auto" />
        </a>
      </div>
    </header>


    <!-- ここに本文セクションを足していく（例） -->
    <section id="tokyo" class="space-y-4">
      <h2 class="text-xl font-bold">東京編</h2>
      <img src="/images/東京編_1.webp" class="w-full rounded-xl" loading="lazy" />
      <img src="/images/東京編_2.webp" class="w-full rounded-xl" loading="lazy" />
      <img src="/images/東京編_3.webp" class="w-full rounded-xl" loading="lazy" />
    </section>

    <section id="miyazaki" class="space-y-4">
      <h2 class="text-xl font-bold">宮崎編</h2>
      <img src="/images/宮崎編1.webp" class="w-full rounded-xl" loading="lazy" />
      <img src="/images/宮崎編2.webp" class="w-full rounded-xl" loading="lazy" />
      <img src="/images/宮崎編3.webp" class="w-full rounded-xl" loading="lazy" />
      <img src="/images/宮崎編4.webp" class="w-full rounded-xl" loading="lazy" />
    </section>


    <!-- =========================
         FOOTER（ページ下）
         ========================= -->
    <footer class="pt-10 border-t space-y-4 text-sm opacity-80">
      <!-- SNS（必要なら） -->
      <div class="flex items-center gap-3">
        <span class="font-bold opacity-90">SNS</span>
        <a href="#" aria-label="X">
          <img src="/images/Xロゴ.webp" alt="X" class="h-6 w-auto" />
        </a>
        <a href="#" aria-label="Facebook">
          <img src="/images/フェイスブックロゴ.webp" alt="Facebook" class="h-6 w-auto" />
        </a>
      </div>

      <!-- 最低限の注意書き（今は短くでOK） -->
      <div class="space-y-1">
        <div>※参加無料（通信費・交通費等は参加者負担）</div>
        <div>※歩行中のスマホ操作はお控えください</div>
      </div>

      <!-- お問い合わせ -->
      <div>
        お問い合わせ：<a class="underline" href="mailto:miyazaki_mikagami@1mikagami.com">miyazaki_mikagami@1mikagami.com</a>
      </div>

      <!-- 外部リンク -->
      <div>
        Locatone：<a class="underline" href="https://www.locatone.sony.net/" target="_blank" rel="noreferrer">公式サイト</a>
      </div>

      <div class="pt-2 opacity-60">© 1mikagami</div>
    </footer>

  </article>
  `;

  return (
    <main className="mx-auto max-w-3xl p-4 md:p-10">
      <div dangerouslySetInnerHTML={{ __html: HTML }} />
    </main>
  );
}
