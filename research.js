
// 研究进展采用 {date:'YYYY-MM-DD',title:'',summary:''}；仅在有真实记录时填写。
const RESEARCH_UPDATES = [];
const RESEARCH_DIRECTIONS = [
  {
    "key": "research/singularities",
    "slug": "singularities",
    "number": "01",
    "title": "奇点与分层理论",
    "en": "SINGULARITIES & STRATIFICATIONS",
    "field": "代数几何",
    "summary": "围绕代数簇的局部奇点、分层结构与参数族中的几何变化展开研究。",
    "keywords": [
      "代数几何",
      "奇点分类",
      "代数簇分层",
      "局部不变量",
      "Whitney 条件",
      "等奇性"
    ],
    "overview": [
      "这一方向围绕代数几何中的奇点分类与代数簇分层展开。奇点记录了空间偏离光滑情形的局部结构；通过局部方程、局部环及相关不变量，比较不同奇点的代数与几何特征，并考察它们在形变中如何变化。",
      "分层将复杂空间分解为较易分析的光滑部分，同时关注不同层之间的边界关系。拟在复代数几何的具体例子中讨论 Whitney 条件及分层随参数变化的行为，进一步考察这些条件与等奇性、局部拓扑之间的联系。"
    ],
    "themes": [
      {
        "title": "局部结构与奇点分类",
        "description": "从具体局部方程和局部环出发，研究可用于区分奇点的不变量；比较代数、解析与拓扑分类各自能辨认的结构。"
      },
      {
        "title": "代数簇分层与边界关系",
        "description": "研究代数簇的光滑层与奇异层如何拼接，关注分层的构造、层间边界关系及 Whitney 条件在例子中的检验。"
      },
      {
        "title": "参数族、形变与等奇性",
        "description": "考察参数变化时局部不变量与分层结构的稳定性，在明确假设下比较不同等奇性条件，并分析变化发生的特殊参数。"
      }
    ],
    "questions": [
      "在选定类别的代数簇或超曲面中，哪些局部不变量能有效区分奇点，哪些不同类型仍无法区分？",
      "如何为具体代数簇构造便于计算和解释的分层，并验证相邻层满足所需的正则性条件？",
      "对给定参数族，哪些不变量的稳定性能够反映几何或拓扑的稳定，哪些结论还需要额外假设？"
    ],
    "methods": "结合局部代数与几何方法，利用局部方程、切空间和奇点不变量理解结构；在具体例子中借助消元与符号计算分析候选分层及参数变化，并将计算结果与理论条件逐一对照。",
    "sources": [
      {
        "title": "Lê Dũng Tráng and Bernard Teissier, Limits of tangents, Whitney stratifications and a Plücker type formula",
        "url": "https://webusers.imj-prg.fr/~bernard.teissier/documents/Limits-of-tangents.pdf"
      }
    ]
  },
  {
    "key": "research/operator-algebras",
    "slug": "operator-algebras",
    "number": "02",
    "title": "算子代数",
    "en": "OPERATOR ALGEBRAS",
    "field": "泛函分析",
    "summary": "从表示与结构出发，探索算子代数的分类问题及其与非交换几何的联系。",
    "keywords": [
      "C*-代数",
      "von Neumann 代数",
      "表示论",
      "结构与分类",
      "K 理论",
      "非交换几何"
    ],
    "overview": [
      "算子代数研究希尔伯特空间上的算子及其非交换结构。拟从 C*-代数与 von Neumann 代数的具体例子入手，关注表示、状态与迹如何反映内部结构，区分范数闭包与弱算子闭包带来的不同问题。",
      "进一步沿结构与分类、非交换几何两条线索展开：考察理想、投影及相关不变量，理解分类方法的适用条件；借助谱与指数的观点，探索代数所编码的拓扑与几何信息。"
    ],
    "themes": [
      {
        "title": "表示与状态",
        "description": "从状态构造表示，比较不同表示所揭示的结构，关注迹、交换子及闭包如何组织希尔伯特空间上的算子。"
      },
      {
        "title": "结构与分类",
        "description": "考察理想、投影与 K 理论等不变量，在明确的代数类别和附加条件下，理解同构与分类问题的边界。"
      },
      {
        "title": "非交换几何",
        "description": "从交换代数与空间的对应出发，借助谱与指数考察非交换对象中的几何信息，探索它们与拓扑的联系。"
      }
    ],
    "questions": [
      "哪些表示、状态或迹能有效区分给定的算子代数？",
      "在选定的 C*-代数类别中，哪些条件使不变量足以支持分类？",
      "非交换代数中的谱与指数如何反映拓扑或几何结构？"
    ],
    "methods": "以泛函分析与表示论为基础，结合谱理论、GNS 构造及典型算子代数实例，逐步引入 K 理论与指数方法；通过具体计算比较不变量，并明确所用结论的假设与适用范围。",
    "sources": [
      {
        "title": "Alain Connes, Noncommutative Geometry",
        "url": "https://alainconnes.org/wp-content/uploads/book94bigpdf.pdf"
      },
      {
        "title": "Wilhelm Winter, Structure of nuclear C*-algebras: From quasidiagonality to classification and back again",
        "url": "https://arxiv.org/abs/1712.00247"
      }
    ]
  },
  {
    "key": "research/ai-formalization",
    "slug": "ai-formalization",
    "number": "03",
    "title": "AI与形式化",
    "en": "AI & FORMALIZATION",
    "field": "数学与人工智能",
    "summary": "探索人工智能辅助的数学表达、证明搜索与形式化验证，连接直觉推理和可核查的证明。",
    "keywords": [
      "形式化数学",
      "交互式定理证明",
      "Lean",
      "自动形式化",
      "前提检索",
      "证明搜索"
    ],
    "overview": [
      "这一方向关注数学知识如何被精确表达，以及人工智能如何参与证明的构造。拟从熟悉的代数与分析命题出发，借助 Lean 等交互式证明助手梳理定义、条件和引理依赖，探索自然语言论证与形式化表述之间的转换。",
      "另一条线索是 AI 辅助的前提检索与证明搜索：让模型提出可能的引理和推理步骤，再由形式系统核查所生成的证明。核查始终针对既定的形式命题与公理；还需判断表述是否忠实于原问题，并区分证明验证、数学解释与研究创新。"
    ],
    "themes": [
      {
        "title": "数学知识的形式化",
        "description": "从基础代数与分析中的具体命题入手，整理定义、假设和引理依赖，构建便于检验与复用的形式化证明。"
      },
      {
        "title": "自然语言与形式语言的转换",
        "description": "关注数学文本中省略的条件与推理步骤，探索辅助翻译的方法，并核对形式命题是否准确表达原有数学含义。"
      },
      {
        "title": "AI 辅助证明搜索",
        "description": "研究前提检索、候选步骤生成与证明反馈的配合，使模型建议经由证明助手核查，并保留清晰的推理依据。"
      }
    ],
    "questions": [
      "如何识别并补全自然语言证明中隐含的假设？",
      "怎样利用已有定理库，为一个证明目标选择有效的引理？",
      "在 AI 参与证明时，如何同时核验形式证明与原命题的对应关系？"
    ],
    "methods": "以 Lean 与数学定理库为主要工具，结合人工证明分析、引理检索和模型辅助搜索。检查证明项、公理依赖与命题含义；小规模实验用于比较方法，不替代完整论证。",
    "sources": [
      {
        "title": "Lean Reference, Validating a Lean Proof",
        "url": "https://lean-lang.org/doc/reference/latest/ValidatingProofs/"
      },
      {
        "title": "LeanDojo: Theorem Proving with Retrieval-Augmented Language Models",
        "url": "https://arxiv.org/abs/2306.15626"
      }
    ]
  }
];
