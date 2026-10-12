const TEACHING_DATA = {
  "course": {
    "name": "线性代数I-B03",
    "term": "2026-2027秋季学期",
    "weeks": "第2–18周",
    "role": "助教",
    "id": "2026-autumn-linear-algebra-i-b03"
  },
  "sessions": [
    {
      "day": 1,
      "type": "正课",
      "teacher": "主讲老师讲授",
      "room": "雁栖湖教三楼219",
      "startPeriod": 1,
      "endPeriod": 2
    },
    {
      "day": 3,
      "type": "正课",
      "teacher": "主讲老师讲授",
      "room": "雁栖湖教三楼219",
      "startPeriod": 1,
      "endPeriod": 2
    },
    {
      "day": 3,
      "type": "习题课",
      "teacher": "本人讲授",
      "room": "雁栖湖教三楼503",
      "startPeriod": 10,
      "endPeriod": 11
    },
    {
      "day": 3,
      "type": "习题课",
      "teacher": "另一位助教讲授",
      "room": "雁栖湖教三楼503",
      "startPeriod": 12,
      "endPeriod": 13
    }
  ],
  "textbook": {
    "title": "线性代数I",
    "originalName": "线性代数I.pdf",
    "url": "./assets/pdf/teaching/linear-algebra-i.pdf",
    "pages": 252,
    "bytes": 1342145,
    "sha256": "b6afc7836ef74a002f30ccb88f2abed5570e4d4c9f7b585bc8bf7e8da3829387"
  },
  "handouts": [
    {
      "number": "01",
      "title": "作业讲评、自然数与集合论补充",
      "pages": 7,
      "bytes": 151840,
      "sha256": "142ba81d07c4c3aaccf1e90f968c964c956bf651ea150903d70e05b20af66a0e",
      "originalName": "线性代数I #第01次习题课讲义.pdf",
      "url": "./assets/pdf/teaching/exercise-session-01.pdf"
    },
    {
      "number": "02",
      "title": "集合与映射、基数与可数性",
      "pages": 8,
      "bytes": 578916,
      "sha256": "8bf79769645b48ad576f20e9e4344a97cd41d4d691600641ae8a4b9223e715f8",
      "originalName": "线性代数I #第02次习题课讲义.pdf",
      "url": "./assets/pdf/teaching/exercise-session-02.pdf"
    },
    {
      "number": "03",
      "title": "关系与商集、序关系与同余",
      "pages": 7,
      "bytes": 579369,
      "sha256": "de7788cba483dc0048791ab8c8bdcc68b9c4e3061be511a61e6b2b845acf929b",
      "originalName": "线性代数I #第03次习题课讲义.pdf",
      "url": "./assets/pdf/teaching/exercise-session-03.pdf"
    },
    {
      "number": "04",
      "title": "整除与辗转相除法",
      "pages": 9,
      "bytes": 587772,
      "sha256": "6065b35107680b4b0a47e547ac11caee299d3c5f366c3f1d6a72d68dd70ee5ca",
      "originalName": "线性代数I #第04次习题课讲义.pdf",
      "url": "./assets/pdf/teaching/exercise-session-04.pdf"
    }
  ],
  "syllabus": {
    "intro": "本课程从线性方程组出发，学习向量、矩阵与行列式的基本理论，并通过群、环、域、复数与多项式理解代数结构和方程之间的联系。学习兼顾计算、概念辨析与证明，为后续线性代数及代数课程打下基础。",
    "objectives": [
      "熟悉集合、映射与等价关系的语言，准确区分定义、假设与结论。",
      "掌握消元法、逆矩阵、秩与行列式的基本计算，理解线性方程组解的结构。",
      "理解向量、子空间、基、维数与线性映射，建立几何、方程和矩阵表示之间的联系。",
      "认识群、环、域的基本概念，理解复数与多项式在代数问题中的作用。",
      "能够组织基本证明，检查推理条件，并用例子与反例辨析概念。"
    ],
    "modules": [
      {
        "number": "01",
        "title": "代数的起源",
        "range": "1–50",
        "topics": "代数基本问题、线性方程组初步、集合与映射、等价关系与序关系、置换、整数算术与辗转相除法。",
        "goal": "理解消元变换为何保持解集，掌握描述映射与等价关系的语言，并熟悉置换和整数除法的基本方法。"
      },
      {
        "number": "02",
        "title": "矩阵",
        "range": "51–108",
        "topics": "向量与线性相关、子空间、基与维数、秩、线性映射及矩阵表示、矩阵运算与等价、逆矩阵、秩标准形、分块矩阵和线性方程组。",
        "goal": "在方程、向量和线性映射之间建立联系；用秩判断可解性，理解齐次解空间及非齐次解的结构。"
      },
      {
        "number": "03",
        "title": "行列式",
        "range": "109–130",
        "topics": "行列式的定义与性质、按行列展开、Vandermonde行列式、乘积公式、伴随矩阵及行列式的应用。",
        "goal": "掌握基本运算和展开方法，理解行列式与可逆性、秩之间的关系，并准确使用Cramer法则及其条件。"
      },
      {
        "number": "04",
        "title": "群、环、域简介",
        "range": "131–170",
        "topics": "二元运算、群、环与域的定义及典型例子。",
        "goal": "认识不同代数结构的公理，区分可逆元、零因子和域中的逆元，尝试以结构语言描述已有运算。"
      },
      {
        "number": "05",
        "title": "复数域",
        "range": "171–180",
        "topics": "复数的定义与运算、实数域的二次扩张、复数的初等几何。",
        "goal": "联系复数的代数表示与几何表示，理解幂与单位根；教材标星的“复数的初等几何”作为拓展阅读。"
      },
      {
        "number": "06",
        "title": "多项式环",
        "range": "181–236",
        "topics": "一元多项式除法、最大公因式与辗转相除法、因式分解、插值与形式微分、无平方分解、整系数多项式、部分分式、多元与对称多项式、判别式与结式、实根隔离与近似、代数学基本定理。",
        "goal": "掌握多项式除法与最大公因式的计算，理解根、因子和重数的关系；认识判别式、结式及实根方法的作用。代数学基本定理使用其结论，不要求其证明。"
      }
    ],
    "advice": [
      "每章先整理定义和适用条件，再完成计算与证明练习。",
      "写明每一步变换的理由，并将结果代回原问题检查。",
      "围绕核心联系组织证明，避免仅罗列公式或结论。",
      "反复比较向量、方程、线性映射与矩阵的不同表示。",
      "结合章末习题查找概念遗漏，整理例子、反例与容易混淆的条件。"
    ]
  },
  "periodGroups": [
    {
      "label": "上午",
      "periods": [
        1,
        2,
        3,
        4
      ]
    },
    {
      "label": "下午",
      "periods": [
        5,
        6,
        7,
        8,
        9
      ]
    },
    {
      "label": "晚上",
      "periods": [
        10,
        11,
        12,
        13
      ]
    }
  ],
  "referenceBooks": [
    {
      "title": "席南华《基础代数》",
      "url": "https://www.ecsponline.com/goods.php?id=189397",
      "linkTitle": "科学出版社介绍页（第二卷）"
    },
    {
      "title": "柯斯特利金《代数学引论》",
      "url": "https://xuanshu.hep.com.cn/front/book/findBookDetails?bookId=59cdee71ba9eb884cf81cf26",
      "linkTitle": "高等教育出版社介绍页（第一卷）"
    }
  ],
  "exams": [
    {
      "title": "期中考试试卷",
      "url": null
    },
    {
      "title": "期末考试试卷",
      "url": null
    }
  ]
};

const TEACHING_PAGES = [
  {
    "key": "teaching/syllabus",
    "title": "教学大纲",
    "en": "SYLLABUS",
    "number": "T01",
    "hint": "课程目标 · 六章内容 · 学习建议",
    "status": "依据教材目录整理",
    "description": "课程目标与六章内容"
  },
  {
    "key": "teaching/notes",
    "title": "课程讲义与参考书",
    "en": "COURSE NOTES & REFERENCES",
    "number": "T02",
    "hint": "课程讲义 · 参考书",
    "status": "课程资料",
    "description": "线性代数I · 参考书链接"
  },
  {
    "key": "teaching/exercises",
    "title": "习题课讲义与试卷",
    "en": "EXERCISE NOTES & EXAM PAPERS",
    "number": "T03",
    "hint": "习题课讲义 · 期中与期末试卷",
    "status": "持续补充",
    "description": "第01–04次讲义 · 试卷待补充"
  }
];
const PAST_COURSES = [
  {
    "course": {
      "id": "2025-spring-linear-algebra-ii-b01",
      "name": "线性代数II-B01",
      "term": "2024-2025春季学期",
      "role": "助教",
      "sortOrder": 202501
    },
    "materialsNote": "以下资料按当前提供的教材整理。",
    "textbook": {
      "title": "线性代数II",
      "originalName": "线性代数II.pdf",
      "url": "./assets/pdf/teaching/2025-spring-linear-algebra-ii-b01/linear-algebra-ii.pdf",
      "pages": 323,
      "bytes": 2670303,
      "sha256": "f96a99987a04e27110908ea78e85c690253644d9f68580217f9ff74dfc0f52ed"
    },
    "referenceBooks": [
      {
        "title": "席南华《基础代数》",
        "url": "https://www.ecsponline.com/goods.php?id=189397",
        "linkTitle": "科学出版社介绍页（第二卷）"
      },
      {
        "title": "柯斯特利金《代数学引论》",
        "url": "https://xuanshu.hep.com.cn/front/book/findBookDetails?bookId=59cdee71ba9eb884cf81cf26",
        "linkTitle": "高等教育出版社介绍页（第一卷）"
      }
    ],
    "handouts": [],
    "exams": [
      {
        "title": "期中考试试卷",
        "url": null
      },
      {
        "title": "期末考试试卷",
        "url": null
      }
    ],
    "syllabus": {
      "intro": "本课程在矩阵与线性方程组的基础上，进一步学习抽象向量空间、二次型、线性算子与内积空间。通过选取基底、变换坐标和分解空间，理解矩阵标准型及其几何意义，并将这些方法应用于解析几何和张量理论。",
      "objectives": [
        "理解抽象向量空间、直和、商空间与对偶空间，能够在抽象对象与坐标表示之间转换。",
        "掌握双线性型、二次型和线性算子的矩阵表示，理解合同与相似所对应的不同问题。",
        "理解不变子空间、特征问题和Jordan标准型，能够完成基本的标准型及基底计算。",
        "掌握内积、正交化、伴随算子与谱分解的基本理论，理解正交投影和最小二乘法。",
        "能够用线性代数方法处理仿射几何、二次曲面和射影空间的基本问题，并认识张量的构造与运算。"
      ],
      "modules": [
        {
          "number": "01",
          "title": "向量空间与二次型",
          "range": "1–70",
          "topics": "抽象向量空间；子空间的直和；线性相关性、维数与基底；商空间；线性函数与对偶空间；双线性型和二次型；斜对称双线性型与Pfaffian多项式。",
          "goal": "掌握基底、坐标与换基的联系；理解直和、商空间和对偶空间；会将对称双线性型与二次型化为对角标准形，并辨析实、复情形。"
        },
        {
          "number": "02",
          "title": "线性算子代数与矩阵的Jordan标准型",
          "range": "71–128",
          "topics": "线性映射；线性算子代数；不变子空间与特征问题；商算子和对偶算子；Jordan标准型的存在唯一性、计算与应用；λ-矩阵和有理标准型。",
          "goal": "理解线性算子与矩阵相似的联系；掌握不变子空间、特征空间和Jordan链的基本方法；通过空间分解理解Jordan标准型，注意所用域的条件。"
        },
        {
          "number": "03",
          "title": "内积空间及其上的线性算子",
          "range": "129–202",
          "topics": "欧氏空间；Hermitian向量空间；自伴随、保距与正规算子；复化与实化；正交展开；正交投影与最小二乘法；正交多项式。",
          "goal": "掌握标准正交基和Gram–Schmidt正交化；理解伴随算子及不同类型算子的谱结构；会求正交投影，并用投影理解最小二乘问题。"
        },
        {
          "number": "04",
          "title": "解析几何（I）：仿射空间",
          "range": "203–234",
          "topics": "仿射空间；欧氏仿射空间；凸集；伪欧氏空间简介。",
          "goal": "区分点与向量；理解仿射坐标、仿射子空间和仿射映射；利用线性代数研究位置关系、距离及凸性。"
        },
        {
          "number": "05",
          "title": "解析几何（II）：二次曲面与射影空间",
          "range": "235–260",
          "topics": "二次曲面的仿射分类；二次曲面的正交分类；射影空间。",
          "goal": "用平移与线性换元化简二次方程；辨析仿射分类与正交分类；理解射影空间、齐次坐标与仿射空间之间的联系。"
        },
        {
          "number": "06",
          "title": "张量",
          "range": "261–306",
          "topics": "张量计算初步；混合张量；张量的乘积、收缩、对称化和交错化；张量代数、对称代数与外代数。",
          "goal": "理解张量积的构造与泛性质；在简单例子中写出张量坐标和坐标变换；会计算乘积与收缩，认识对称积、外积及其代数意义。"
        }
      ],
      "note": "教材标星专题包括λ-矩阵与有理标准型、复化与实化、正交展开、正交多项式、伪欧氏空间，可作拓展学习。",
      "advice": [
        "每个概念同时准备抽象定义、坐标表达和具体例子，明确它们之间如何对应。",
        "换基计算先说明选取的基，再检查转换矩阵及所用公式，尤其区分相似、合同与正交变换。",
        "标准型学习结合空间分解和基底构造，不只记忆最终矩阵形式。",
        "证明题先列出所用条件；利用低维例子和反例检查结论是否依赖域、维数或内积结构。",
        "按章完成计算与证明练习，再用几何或张量中的应用回顾前面的方法。"
      ]
    }
  }
];
