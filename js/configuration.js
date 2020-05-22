
var json1 = [
  {
      "id" : "T00",
      "content" : "以下の場合に本判断フローを実施し、その結果に基づいて行動くださるようにお願い致します。",
      "list01" : "・身近に感染者が存在するまたは、存在した場合",
      "list02" : "・現在発熱がある場合",
      "list03" : "",
      "routea_link" : "ルートAはこちら",
      "href01" : "test.html?questionid=10&questionno=5",
      "routeb_link" : "ルートBはこちら",
      "href02" : "test.html?questionid=12&questionno=7",
      "top_id" : "Q01",
      "next_content" : "診断開始",
      "top_href" : "test.html?questionid=0&questionno=0"
  }
];

var json2 = [
    {
        "id" : "Q01",
        "content" : "周囲に新型コロナの疑いまたは、陽性の人物（感染可能性者）が近くに現れた。または、そのような情報を入手した。",
        "list01" : "",
        "list02" : "",
        "list03" : "",
        "list04" : "",
        "yes_id" : "Q02",
        "yes_content" : "YES",
        "yes_button_href" : "test.html?questionid=1&beforeid=0",
        "no_id" : "A01",
        "no_content" : "NO",
        "no_button_href" : "result.html?resultid=0&list=Q01"
    },
    {
        "id" : "Q02",
        "content" : "感染可能性者との接触があった。",
        "list01" : "・業務居室が同じである（あった）（現場等）",
        "list02" : "・共同生活である（あった）（家族等）",
        "list03" : "・対面での会話歴がある（あった）（顧客等）",
        "list04" : "・飲食・娯楽を共にする場面がある（あった）(友人等）",
        "yes_id" : "Q03",
        "yes_content" : "YES",
        "yes_button_href" : "test.html?questionid=2&beforeid=1",
        "no_id" : "Q08A",
        "no_content" : "NO",
        "no_button_href" : "test.html?questionid=7&beforeid=1",
        "return_id" : "backAnchorLink",
        "return_content" : "return",
        "return_button_href" : "test.html"
    },
    {
        "id" : "Q03",
        "content" : "感染可能性者の新型コロナウィルス感染が確定している（した）。",
        "list01" : "",
        "list02" : "",
        "list03" : "",
        "list04" : "",
        "yes_id" : "Q04",
        "yes_content" : "YES",
        "yes_button_href" : "test.html?questionid=3&beforeid=2",
        "no_id" : "Q08B",
        "no_content" : "NO",
        "no_button_href" : "test.html?questionid=8&beforeid=2",
        "return_id" : "backAnchorLink",
        "return_content" : "return",
        "return_button_href" : "test.html"
    },
    {
        "id" : "Q04",
        "content" : "当事者の体調に以下の３つがすべて当てはまる。",
        "list01" : "・37.5℃以上の発熱が4日間以上継続している。",
        "list02" : "・一週間以上の咳が継続している。",
        "list03" : "・強い倦怠感・呼吸困難・味覚障害に陥るときがある。",
        "list04" : "",
        "yes_id" : "Q05",
        "yes_content" : "YES",
        "yes_button_href" : "test.html?questionid=4&beforeid=3",
        "no_id" : "Q08C",
        "no_content" : "NO",
        "no_button_href" : "test.html?questionid=9&beforeid=3",
        "return_id" : "backAnchorLink",
        "return_content" : "return",
        "return_button_href" : "test.html"
    },
    {
        "id" : "Q05",
        "content" : "体調の不良に伴い通院を行った。",
        "list01" : "",
        "list02" : "",
        "list03" : "",
        "list04" : "",
        "yes_id" : "Q06",
        "yes_content" : "YES",
        "yes_button_href" : "test.html?questionid=5&beforeid=4",
        "no_id" : "A04",
        "no_content" : "NO",
        "no_button_href" : "result.html?resultid=3&list=Q01,Q02,Q03,Q04,Q05",
        "return_id" : "backAnchorLink",
        "return_content" : "return",
        "return_button_href" : "test.html"
    },
    {
        "id" : "Q06",
        "content" : "通院の結果、PCR検査の受検を指示された。",
        "list01" : "",
        "list02" : "",
        "list03" : "",
        "list04" : "",
        "yes_id" : "Q07",
        "yes_content" : "YES",
        "yes_button_href" : "test.html?questionid=6&beforeid=5",
        "no_id" : "A05",
        "no_content" : "NO",
        "no_button_href" : "result.html?resultid=4&list=Q01,Q02,Q03,Q04,Q05,Q06",
        "return_id" : "backAnchorLink",
        "return_content" : "return",
        "return_button_href" : "test.html"
    },
    {
        "id" : "Q07",
        "content" : "当事者が陽性であると判断された。",
        "list01" : "",
        "list02" : "",
        "list03" : "",
        "list04" : "",
        "yes_id" : "A06",
        "yes_content" : "YES",
        "yes_button_href" : "result.html?resultid=5&list=Q01,Q02,Q03,Q04,Q05,Q06,Q07",
        "no_id" : "A05",
        "no_content" : "NO",
        "no_button_href" : "result.html?resultid=4&list=Q01,Q02,Q03,Q04,Q05,Q06,Q07",
        "return_id" : "backAnchorLink",
        "return_content" : "return",
        "return_button_href" : "test.html"
    },
    {
        "id" : "Q03B",
        "content" : "新型コロナウィルスに関する現場指示が存在する。",
        "list01" : "",
        "list02" : "",
        "list03" : "",
        "list04" : "",
        "yes_id" : "A02",
        "yes_content" : "YES",
        "yes_button_href" : "result.html?resultid=1&list=Q01,Q02,Q03B",
        "no_id" : "A03",
        "no_content" : "NO",
        "no_button_href" : "result.html?resultid=2&list=Q01,Q02,Q03B",
        "return_id" : "backAnchorLink",
        "return_content" : "return",
        "return_button_href" : "test.html"
    },
    {
        "id" : "Q04B",
        "content" : "新型コロナウィルスに関する現場指示が存在する。",
        "list01" : "",
        "list02" : "",
        "list03" : "",
        "list04" : "",
        "yes_id" : "A02",
        "yes_content" : "YES",
        "yes_button_href" : "result.html?resultid=1&list=Q01,Q02,Q03,Q04B",
        "no_id" : "A03",
        "no_content" : "NO",
        "no_button_href" : "result.html?resultid=2&list=Q01,Q02,Q03,Q04B",
        "return_id" : "backAnchorLink",
        "return_content" : "return",
        "return_button_href" : "test.html"
    },
    {
        "id" : "Q05B",
        "content" : "新型コロナウィルスに関する現場指示が存在する。",
        "list01" : "",
        "list02" : "",
        "list03" : "",
        "list04" : "",
        "yes_id" : "A02",
        "yes_content" : "YES",
        "yes_button_href" : "result.html?resultid=1&list=Q01,Q02,Q03,Q04,Q05B",
        "no_id" : "A03",
        "no_content" : "NO",
        "no_button_href" : "result.html?resultid=2&list=Q01,Q02,Q03,Q04,Q05B",
        "return_id" : "backAnchorLink",
        "return_content" : "return",
        "return_button_href" : "test.html"
    },
    {
        "id" : "Q06_routea",
        "title" : "Q06",
        "content" : "通院の結果、PCR検査の受検を指示された。",
        "list01" : "",
        "list02" : "",
        "list03" : "",
        "list04" : "",
        "yes_id" : "Q07",
        "yes_content" : "YES",
        "yes_button_href" : "test.html?questionid=11&beforeid=0",
        "no_id" : "A05",
        "no_content" : "NO",
        "no_button_href" : "result.html?resultid=4&list=Q06",
        "return_id" : "backAnchorLink",
        "return_content" : "return",
        "return_button_href" : "test.html"
    },
    {
        "id" : "Q07_routea",
        "content" : "当事者が陽性であると判断された。",
        "list01" : "",
        "list02" : "",
        "list03" : "",
        "list04" : "",
        "yes_id" : "A06",
        "yes_content" : "YES",
        "yes_button_href" : "result.html?resultid=5&list=Q06,Q07",
        "no_id" : "A05",
        "no_content" : "NO",
        "no_button_href" : "result.html?resultid=4&list=Q06,Q07",
        "return_id" : "backAnchorLink",
        "return_content" : "return",
        "return_button_href" : "test.html"
    },
    {
        "id" : "Q08_routeb",
        "content" : "新型コロナウィルスに関する現場指示が存在する。",
        "list01" : "",
        "list02" : "",
        "list03" : "",
        "list04" : "",
        "yes_id" : "A02",
        "yes_content" : "YES",
        "yes_button_href" : "result.html?resultid=1&q=Q08_routeb",
        "no_id" : "A03",
        "no_content" : "NO",
        "no_button_href" : "result.html?resultid=2&q=Q08_routeb",
        "return_id" : "backAnchorLink",
        "return_content" : "return",
        "return_button_href" : "test.html"
    }
];

var json3 = [
  {
      "id" : "A01",
      "title" : "A01.",
      "content01" : "○通常通りの生活・業務を行ってください。",
      "content02" : "",
      "list01" : "",
      "content03" : "",
      "list02" : "",
      "list03" : "",
      "link_list" : "※1状況の報告についてはこちら",
      "report_href" : "template.html",
      "exit_id" : "T00",
      "exit_content" : "topに戻る",
      "href" : "index.html"
  },
  {
      "id" : "A02",
      "title" : "A02.",
      "content01" : "○まず、営業へ電話で状況を簡潔に伝えてください。",
      "content02" : "",
      "list01" : "・優先順位：今井＞小鹿または高橋の順番で電話してください。",
      "content03" : "○状況の報告※1を行い、総務からの指示を仰いでください。",
      "list02" : "営業が起点となり今後の業務方針を契約先と相談し、後日情報連携します。",
      "list03" : "",
      "link_list" : "※1状況の報告についてはこちら",
      "report_href" : "template.html",
      "exit_id" : "T00",
      "exit_content" : "topに戻る",
      "href" : "index.html"
  },
  {
      "id" : "A03",
      "title" : "A03.",
      "content01" : "",
      "content02" : "○まず、営業へ電話で状況を伝えてください。",
      "list01" : "・優先順位：今井＞小鹿または高橋の順番で電話してください。",
      "content03" : "○状況の報告※1を行い、現場指示に従ってください。",
      "list02" : "営業が起点となり今後の業務方針を契約先と相談し、後日情報連携します。",
      "list03" : "",
      "link_list" : "※1状況の報告についてはこちら",
      "report_href" : "template.html",
      "exit_id" : "T00",
      "exit_content" : "topに戻る",
      "href" : "index.html"
  },
  {
      "id" : "A04",
      "title" : "A04.",
      "content01" : "○医師の指示に従ってください。",
      "content02" : "○まず、営業へ電話で状況を伝えてください。",
      "list01" : "・優先順位：今井＞小鹿または高橋の順番で電話してください。",
      "content03" : "○状況の報告※1を行い、総務からの指示を仰いでください。",
      "list02" : "診察結果から、「ルートA」を参照してフローの確認を進めてください。",
      "list03" : "",
      "link_list" : "※1状況の報告についてはこちら",
      "report_href" : "template.html",
      "routea_link" : "ルートAはこちら",
      "href01" : "test.html?questionid=10&questionno=5",
      "exit_id" : "T00",
      "exit_content" : "topに戻る",
      "href" : "index.html"
  },
  {
      "id" : "A05",
      "title" : "A05.",
      "content01" : "○医師の指示に従ってください。",
      "content02" : "○まず、営業へ電話で状況を伝えてください。",
      "list01" : "・優先順位：今井＞小鹿または高橋の順番で電話してください。",
      "content03" : "○状況の報告※1を行い、総務からの指示を仰いでください。",
      "list02" : "・重大な疾患でない限り、自宅等で体調回復に努めてください。",
      "list03" : "・体調回復後は、「ルートB」を参照してフローの確認を進めてください。",
      "link_list" : "※1状況の報告についてはこちら",
      "report_href" : "template.html",
      "routeb_link" : "ルートBはこちら",
      "href02" : "test.html?questionid=12&questionno=7",
      "exit_id" : "T00",
      "exit_content" : "topに戻る",
      "href" : "index.html"
  },
  {
      "id" : "A06",
      "title" : "A06.",
      "content01" : "○医師の指示に従ってください。",
      "content02" : "○日々の体調・病状状況の報告※1を行ってください。",
      "list01" : "・体調回復後は、「ルートB」を参照してフローの確認を進めてください。",
      "content03" : "",
      "list02" : "",
      "list03" : "",
      "link_list" : "※1状況の報告についてはこちら",
      "report_href" : "template.html",
      "routeb_link" : "ルートBはこちら",
      "href02" : "test.html?questionid=12&questionno=7",
      "exit_id" : "T00",
      "exit_content" : "topに戻る",
      "href" : "index.html"
  }
];
var json4 = [
  {
      "id" : "tmp",
      "title" : "※１：報告のテンプレートについて",
      "item01" : "・フローの随所に報告を必要とする場面があります。その報告には以下の事項を含めて報告をお願いします。",
      "item02" : "※自身をはじめとする、社員・ご家族の命を守る活動として認識し、迅速なご対応をお願いいたします",
      "item_to" : "・TO:",
      "id01" : "to01",
      "href_to01" : "mailto:sales@brave-heart.co.jp",
      "item_mail01" : "sales@brave-heart.co.jp;",
      "item_cc" : "・CC:",
      "id02" : "cc01",
      "id03" : "cc02",
      "item_mail02" : "imi@brave-heart.co.jp;",
      "href_cc01" : "mailto:imi@brave-heart.co.jp",
      "item_mail03" : "hiratsuka@brave-heart.co.jp;",
      "href_cc02" : "mailto:hiratsuka@brave-heart.co.jp",
      "item03" : "所属チームリーダー",
      "item04" : "・件名：【報告】新型コロナウィルス感染症 判断フロー 報告_氏名_YYYYMMDD",
      "item05" : "①４日間以上続く37.5℃以上の発熱がある（YES/NO）",
      "item06" : "②1週間以上続く、咳、くしゃみの症状がある（YES/NO）",
      "item07" : "③強い全身のだるさ、呼吸がしにくい息苦しさ、味覚障害がある（YES/NO）",
      "item08" : "④感染者（疑いを含む）との関係性（現場社員、家族、友人、ほか）",
      "item09" : "⑤感染者（疑いを含む）発生報告を受けた日からさかのぼって14日以内に接触した社内メンバーの報告",
      "item10" : "⑥現場責任者からの指示情報連携",
      "item11" : "⑦上位会社等の現場外からの情報である（YES/NO）",
      "item12" : "⑧現時点のアローアンス下限値を下回る可能性（YES/NO）",
      "item13" : "⑨現場の新型コロナウィルスに対応する進捗状況説明報",
      "item14" : "⑩リモートワーク対応の可否（YES/NO）",
      "exit_id" : "T00",
      "exit_content" : "topに戻る",
      "href" : "index.html"
  }
];
