# DesktopPetByAi的一些配置文件

## 软件的目录结构

```
DesktopPetByAi/
├── plugins/              # 插件系统目录
├── yyskills/             # 技能配置文件
    ├── skill_list.json   # 技能列表文件
    └── SKILL.md          # 技能配置文件
├── outfood/              # 食物图片目录
├── ai_memory/            # 记忆文件目录
├── gif/                  # 宠物图片目录
    └── 猫/               # 默认宠物图片
├── ico/                  # 软件图标目录
├── imgs/                 # 表情包存放目录
├── log                   # 日志生成目录
├── DesktopPetByAi.exe    # 程序入口文件
├── demo_setting.json     # 软件总配置界面
├── mcp_config.json       # mcp服务器的配置文件
├── prompt.txt            # 存放提示词文件
└── 其他配置文件...
```

>[!TIP]
>下面是经过一些配置后才会出现的文件和目录
>1. <code>ai_memory</code>和ai聊天后才会生成的目录(或者说目录里面才会有内容)
>2. <code>log</code> 运行软件后才会生成的目录
>3. <code>demo_setting.json</code> 运行软件后才会生成的文件
>4. <code>mcp_config.json</code> 配置mcp服务器后才会生成的文件
>5. <code>skill_list.json</code> 技能列表文件

## 评论

<Utterances repo="cjz-wr/DesktopPetByAi-Document" />