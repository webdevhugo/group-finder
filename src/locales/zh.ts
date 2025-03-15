export default {
    common: {
        viewDashboard: "查看仪表板",
        createAccount: "创建账户",
        signIn: "登录",
        goToDashboard: "前往仪表板",
        upgradeNow: "立即升级",
        signInToUpgrade: "登录以升级",
        settings: "设置",
        signOut: "登出",
    },
    landing: {
        hero: {
            badge: "发现志同道合的人",
            title: "创建和发现新的兴趣小组",
            description: "我们的在线服务让您轻松与分享您兴趣的人联系，无论是徒步旅行、绘画还是踢足球。创建或加入小组，安排聚会，与新朋友一起享受您的爱好。今天就开始建立您的社区！",
        },
        pricing: {
            title: "简单定价，适合所有人",
            subtitle: "选择最适合您的计划。享受高级内容的完全访问权和专家支持。今天就开始您的旅程，实现您的目标！",
            includes: "此计划包括：",
            basic: "基础版",
            premium: "高级版",
            perMonth: "/ 月",
            features: {
                solution: "完整的Next.js解决方案",
                stripe: "Stripe集成",
                auth: "用户认证",
                authorization: "基于角色的授权",
                dashboard: "用户仪表板",
            },
        },
    },
    footer: {
        company: "公司",
        helpCenter: "帮助中心",
        twitter: "推特",
        legal: "法律",
        privacyPolicy: "隐私政策",
        termsOfService: "服务条款",
        rights: "是依法受到法律保护的注册商标，任何人不得以任何形式，未经书面授权使用本商标，否则将依法追究法律责任。",
        rightsChina: "中国境内的AIGC项目由沸腾宇宙（深圳）影业有限公司提供技术支持，以符合中国法律监管要求"
    },
    menu: {
        yourGroups: "您的小组",
        browseGroups: "浏览小组",
        apiDocs: "API文档",
        features: "功能",
        pricing: "定价",
    },
    settings: {
        theme: {
            toggle: "切换主题",
            light: "浅色",
            dark: "深色",
            system: "系统"
        }
    },
    browse: {
        title: "浏览小组",
        searchPlaceholder: "篮球、编程、手工等",
        searchButton: "搜索",
        noResults: "没有找到匹配的小组",
    },
    dashboard: {
        title: "您的小组",
        ownedGroupsTitle: "您管理的小组",
        noOwnedGroups: "您没有管理任何小组",
        otherGroupsTitle: "您参与的其他小组",
        noOtherGroups: "您没有参与任何小组",
        emptyState: {
            title: "哎呀，您还没有拥有任何小组",
            createButton: "创建小组",
            browseButton: "浏览小组",
        },
        groupCard: {
            manageButton: "管理小组",
            viewButton: "查看小组",
            viewButtonBrowse: "查看",
        },
    },
} as const;