export default function PrivacyPolicyPage() {
  return (
    <main
      className="min-h-screen py-16 px-4"
      style={{
        backgroundColor: "#f3f3f3",
        backgroundImage: "url(/images/background.webp)",
        backgroundRepeat: "repeat",
        backgroundSize: "auto",
      }}
    >
      <div className="mx-auto max-w-3xl rounded-2xl bg-[#FFD45A] p-4">
        <div className="rounded-xl bg-white p-8 text-gray-800 leading-relaxed">
          <h1 className="mb-6 text-xl font-bold">
            「東京～宮崎」サウンドミステリーツアー<br />
            プライバシーポリシー（個人情報保護方針）
          </h1>

          <p className="mb-6">
            株式会社シナリオテクノロジーミカガミ（以下、「当社」といいます。）は、
            お客様の個人情報の重要性を認識し、個人情報保護に関する法律および
            関連法令を遵守し、以下のプライバシーポリシーに従って、
            お客様の個人情報の保護に努めます。
          </p>

          <h2 className="mt-8 mb-2 font-bold">【応募資格に関する特則】</h2>
          <p className="mb-6">
            本キャンペーンの景品には酒類（例：ウォッカ）が含まれます。
            酒類を景品とする応募については、満20歳以上の方に限定させていただきます。
            20歳未満の方の応募が判明した場合、景品送付の可否にかかわらず、
            当選の権利は無効となります。
          </p>

          <h2 className="mt-8 mb-2 font-bold">
            1. 個人情報取扱事業者の名称および住所
          </h2>
          <p className="mb-6">
            名称：株式会社シナリオテクノロジーミカガミ<br />
            住所：東京都豊島区目白2丁目16-19 若林ビル4F<br />
            代表者名：代表取締役 須藤 貴之
          </p>

          <h2 className="mt-8 mb-2 font-bold">
            2. 取得する個人情報の種類
          </h2>
          <p className="mb-2">
            当社が本キャンペーンを通じて取得する個人情報は、以下の通りです。
          </p>
          <ul className="mb-6 list-disc pl-6">
            <li>氏名</li>
            <li>メールアドレス</li>
            <li>電話番号</li>
            <li>
              景品送付先住所（郵便番号、都道府県、市区町村、番地、建物名）
            </li>
            <li>その他、応募フォームやアンケートにご入力いただいた情報</li>
          </ul>

          <h2 className="mt-8 mb-2 font-bold">
            3. 個人情報の利用目的
          </h2>
          <p className="mb-2">
            当社は、お客様から取得した個人情報を、以下の目的の達成に必要な範囲内で利用いたします。
          </p>
          <ul className="mb-6 list-disc pl-6">
            <li>当選者の抽選、選定、および当選通知のため</li>
            <li>当選者への景品の発送およびこれに関する連絡のため</li>
            <li>本キャンペーンに関するお問い合わせへの対応のため</li>
            <li>
              実施結果の集計・分析および、個人を特定できない統計データを作成し、
              今後のイベント企画・改善に活用するため
            </li>
          </ul>

          <h2 className="mt-8 mb-2 font-bold">
            4. 個人情報の第三者提供について
          </h2>
          <p className="mb-6">
            当社は、法令に基づく場合、およびお客様ご本人にご同意いただいた場合を除き、
            取得した個人情報を第三者に提供することはありません。
            <br /><br />
            ただし、景品の発送に必要な範囲内で、景品配送を委託する配送業者に対し、
            お客様の氏名および住所を開示する場合があります。
          </p>

          <h2 className="mt-8 mb-2 font-bold">
            5. 個人情報の安全管理措置について
          </h2>
          <ul className="mb-6 list-disc pl-6">
            <li>
              組織的安全管理措置：責任者を定め、事故発生時の対応体制を整備します。
            </li>
            <li>
              人的安全管理措置：従業員に対し、適切な教育・監督を実施します。
            </li>
            <li>
              技術的安全管理措置：アクセス制限やセキュリティ対策を施したシステムで管理します。
            </li>
            <li>
              物理的安全管理措置：書類や機器の盗難・紛失を防止するための措置を講じます。
            </li>
          </ul>

          <h2 className="mt-8 mb-2 font-bold">
            6. 保有個人データの開示、訂正、利用停止等の請求
          </h2>
          <p className="mb-6">
            お客様ご本人またはその代理人から、保有個人データの開示、訂正、
            利用停止等のご請求があった場合、法令に従い適切に対応いたします。
          </p>

          <h2 className="mt-8 mb-2 font-bold">
            7. 個人情報に関するお問い合わせ窓口
          </h2>
          <p className="mb-6">
            窓口名称：「東京～宮崎」サウンドミステリーツアー 個人情報管理担当<br />
            連絡先メールアドレス：
            <a
              href="mailto:miyazaki_mikagami@1mikagami.com"
              className="underline ml-1"
            >
              miyazaki_mikagami@1mikagami.com
            </a>
          </p>

          <h2 className="mt-8 mb-2 font-bold">
            8. プライバシーポリシーの変更
          </h2>
          <p className="mb-6">
            当社は、法令の改正等に伴い、本プライバシーポリシーの内容を改定することがあります。
            改定後のプライバシーポリシーは、本ページに掲載されたときから効力を生じるものとします。
          </p>

          <p className="text-sm text-gray-500">
            制定日：2025年10月28日
          </p>

          <div className="mt-8">
            <a
              href="/"
              className="text-sm underline text-gray-600"
            >
              back
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
