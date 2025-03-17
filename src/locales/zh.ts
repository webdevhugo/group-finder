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
        save: "保存",
        cancel: "取消",
        success: "成功",
        error: "错误",
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
        title: "小组设置",
        groupImage: "小组图片",
        groupImageDescription: "上传小组图片使您的小组更加突出。",
        groupName: "小组名称",
        groupVisibility: "小组可见性",
        groupVisibilityDescription: "小组默认为私密。如果您希望互联网上的随机用户无需邀请即可找到并加入您的小组，请将此选项打开。",
        groupDescription: "小组描述",
        save: "保存",
        nameUpdated: "名称已更新",
        nameUpdatedMessage: "名称更新成功。",
        updateSuccessful: "更新成功",
        descriptionUpdatedMessage: "您的小组描述已更新。",
        errorMessage: "出现错误",
        descriptionErrorMessage: "您的描述未能成功更新。",
        socialLinks: {
            title: "社交链接",
            youtube: "YouTube",
            discord: "Discord",
            x: "X",
            github: "Github",
            updated: "小组已更新",
            updatedMessage: "您的社交链接已更新。",
            errorMessage: "更新社交链接失败。",
        },
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
            members: "成员",
        },
    },
    group: {
        header: {
            members: "{count} 成员",
            upcomingEvents: "{count} 即将举行的活动",
            privateGroup: "私密小组",
        },
        tabs: {
            info: "信息",
            posts: "帖子",
            events: "活动",
            members: "成员",
            settings: "设置",
            danger: "危险操作",
        },
        notFound: {
            title: "哎呀，找不到此路径",
            viewGroupInfo: "查看小组信息",
        },
        danger: {
            title: "危险操作",
            deleteGroup: "删除此小组",
            deleteDescription: "删除此小组及其所有数据。",
            deleteButton: "删除小组",
            deleteConfirmTitle: "删除小组",
            deleteConfirmDescription: "您确定要删除此小组吗？所有成员将无法再查看小组信息，所有数据将从我们的系统中删除。",
            cancelButton: "取消",
            successMessage: "您已离开此小组。",
            errorMessage: "删除小组时出现错误。",
        },
        events: {
            title: "活动",
            noEvents: "尚未创建活动",
            upcoming: "即将举行",
            noUpcoming: "没有找到即将举行的活动",
            expired: "已过期",
            noExpired: "没有找到已过期的活动",
            createButton: "创建活动",
            createDescription: "填写以下表单以创建活动。",
            editEvent: "编辑活动",
            editEventDescription: "编辑活动详情",
            deleteEvent: "删除活动",
            deleteEventConfirmation: "您确定要删除此活动吗？删除此活动可能会使您的成员感到困惑或不满。",
            cancel: "取消",
            delete: "删除",
            form: {
                eventName: "活动名称",
                description: "描述",
                dateOfEvent: "活动日期",
                pickDate: "选择日期",
                timeOfEvent: "活动时间",
                hours: "小时",
                minutes: "分钟",
                period: "时段",
                image: "图片",
                saveUpdates: "保存更新",
                createEvent: "创建活动",
                errorTitle: "创建活动时出错",
                successMessage: "活动创建成功。",
                errorMessage: "创建活动时出现错误。",
            },
        },
        info: {
            title: "信息",
            groupNotFound: "未找到小组",
            saveChanges: "保存更改",
            successMessage: "小组信息已更新。",
            errorMessage: "小组信息更新失败。",
        },
        posts: {
            title: "帖子",
            noPosts: "尚未创建帖子",
            createButton: "创建帖子",
            backToPosts: "返回帖子列表",
            replies: "回复",
            managePost: "管理帖子",
            readPost: "阅读帖子",
            deletePost: "删除帖子",
            deletePostConfirm: "您确定要删除此帖子吗？",
            deletePostSuccess: "帖子删除成功",
            form: {
                postTitle: "标题",
                message: "内容",
                createPost: "创建帖子",
                updatePost: "更新帖子",
                errorTitle: "创建帖子时出错",
                errorUpdateTitle: "更新帖子时出错",
                successMessage: "帖子创建成功。",
                updateSuccessMessage: "帖子更新成功。",
                errorMessage: "创建帖子时出现错误。",
                errorUpdateMessage: "更新帖子时出现错误。",
            },
            createPostTitle: "创建帖子",
            createPostDescription: "填写下面的表单创建帖子。",
            reply: {
                title: "内容",
                postReply: "发表回复",
                updateReply: "更新回复",
                errorTitle: "创建回复时出错",
                errorUpdateTitle: "更新回复时出错",
                successMessage: "回复创建成功。",
                updateSuccessMessage: "回复更新成功。",
                errorMessage: "创建回复时出现错误。",
                errorUpdateMessage: "更新回复时出现错误。",
                editReply: "编辑回复",
                editReplyDescription: "更新您的回复内容",
                deleteReply: "删除回复",
                deleteReplyConfirm: "您确定要删除此回复吗？",
                deleteReplySuccess: "回复已删除",
            },
        },
        members: {
            title: "成员",
            owner: "拥有者",
            admin: "管理员",
            members: "成员",
            invite: {
                button: "发送邀请",
                title: "邀请好友",
                description: "输入您想邀请加入此小组的人的电子邮件。",
                emailLabel: "电子邮件",
                emailPlaceholder: "webdevcody@gmail.com",
                inviteButton: "邀请",
                cancelButton: "取消",
                successTitle: "邀请已发送",
                successMessage: "告诉您的朋友查看他们的电子邮件。",
                errorMessage: "发送邀请失败。",
            },
        },
        join: {
            button: "加入群组",
            success: {
                title: "成功",
                description: "您已加入此群组"
            }
        },
        leave: {
            button: "退出群组",
            dialog: {
                title: "退出群组",
                description: "您确定要退出此群组吗？如果这是一个私密群组，管理员需要重新邀请您才能加入。",
                cancel: "取消",
                confirm: "是的，退出群组"
            },
            success: {
                title: "成功",
                description: "您已退出此群组。"
            }
        }
    },
    profile: {
        settings: {
            displayName: "显示名称",
            nameUpdated: "名称已更新",
            nameUpdatedMessage: "名称更新成功。",
            errorMessage: "更新个人资料名称失败。",
            bio: {
                saveChanges: "保存更改",
                successMessage: "您的个人简介已更新。",
                errorMessage: "您的个人简介更新失败。",
            },
        },
        tabs: {
            bio: "简介",
            recentPosts: "最近帖子",
            groups: "小组",
            followers: "关注者",
        },
        header: {
            editProfile: "编辑您的个人资料",
            follow: "关注",
            unfollow: "取消关注",
        },
        noBio: "该用户没有简介",
        noPosts: "该用户还没有帖子",
        noGroups: "该用户不是任何小组的成员",
        noFollowers: "该用户没有关注者",
        viewGroup: "查看小组",
    },
    email: {
        invite: {
            preview: "您收到了一个群组邀请！",
            message: "您被邀请加入 groupfinder.com 上的群组 {groupName}。点击下方链接登录并访问您的群组。",
            actionButton: "登录查看群组",
            footer: "© 2024 {appName}。保留所有权利。"
        },
        magicLink: {
            preview: "您收到了一个群组邀请！",
            message: "您的登录链接在下方，点击即可登录。",
            button: "使用链接登录",
            footer: "© 2024 {appName}。保留所有权利。"
        }
    },
    notifications: {
        title: "您的通知",
        empty: "您没有任何通知",
        markAllRead: "全部标记为已读",
        viewAll: "查看通知",
        headerTitle: "通知",
        dropdownEmpty: "没有新的通知",
        clearRead: "清除已读通知",
        success: "成功",
        markedAsRead: "所有消息已标记为已读。",
        cleared: "已读消息已清除。",
        confirmClear: "您确定吗？",
        confirmClearDesc: "这将永久清除系统中所有您已读的通知。",
        cancel: "取消",
        clearButton: "清除通知",
        view: "查看",
        read: "已读"
    },
    error: {
        auth: {
            authentication: "您必须登录后才能查看此内容",
            privateGroup: "您没有权限查看此群组",
            notFound: "未找到"
        },
        user: {
            deleteAccount: "您只能删除自己的账号",
            notFound: "未找到用户",
            emailExists: "该邮箱已被注册",
            invalidToken: "无效的令牌",
            loginError: "邮箱或密码错误"
        },
        file: {
            notImage: "文件必须是图片格式",
            tooLarge: "文件大小不能超过 {maxSize}MB"
        },
        authTitle: "哎呀！您需要先登录",
        authMessage: "要访问此页面，请先登录。",
        signIn: "登录",
        genericTitle: "哎呀！出了点问题"
    },
    auth: {
        signIn: {
            title: "登录",
            description: "使用以下选项之一登录。",
            email: "邮箱",
            emailPlaceholder: "请输入邮箱",
            password: "密码",
            passwordPlaceholder: "请输入密码",
            button: "登录",
            forgotPassword: "忘记密码",
            createAccount: "创建账号",
            or: "或",
            signInWithEmail: "使用邮箱登录",
            orSignInWithEmail: "或使用邮箱登录",
            signInWithMagicLink: "使用链接登录",
            google: "使用Google登录",
            github: "使用GitHub登录",
            otherOptions: "其他选项",
            error: {
                title: "抱歉，登录失败",
                message: "出了点问题",
            },
            success: {
                title: "登录成功！",
                description: "祝您使用愉快"
            }
        },
        signUp: {
            title: "注册",
            email: "邮箱",
            emailPlaceholder: "请输入邮箱",
            password: "密码",
            passwordPlaceholder: "请输入密码",
            confirmPassword: "确认密码",
            confirmPasswordPlaceholder: "请确认密码",
            button: "注册",
            error: {
                title: "抱歉，注册失败",
                message: "出了点问题",
                passwordMatch: "两次输入的密码不匹配"
            },
            validation: {
                invalidEmail: "请输入有效的邮箱地址",
                passwordTooShort: "密码至少需要8个字符",
            }
        },
        signOut: {
            title: "已成功退出登录",
            description: "您已成功退出登录。现在可以重新登录您的账号。",
            button: "登录"
        },
        forgotPassword: {
            title: "忘记密码",
            button: "发送重置邮件",
            email: "邮箱",
            emailPlaceholder: "请输入邮箱",
            success: {
                title: "重置链接已发送",
                description: "我们已向您发送了一封包含密码重置链接的邮件。"
            }
        },
        magicLink: {
            title: "请查看您的邮箱",
            description: "我们已向您发送了一个登录链接。请点击邮件中的链接进行登录。",
            error: {
                title: "令牌已过期",
                description: "抱歉，此令牌已过期或已被使用。请尝试重新登录",
                button: "登录"
            }
        },
        verify: {
            title: "邮箱验证成功",
            description: "您的邮箱已成功验证。现在可以登录您的账号了。",
            button: "登录",
            preview: "验证您的邮箱",
            message: "点击以下链接验证您的邮箱",
            footer: "© 2025 {appName}。保留所有权利。",
            verifyButton: "验证邮箱"
        },
        resetPassword: {
            preview: "重置您的密码",
            message: "点击以下链接重置密码",
            button: "重置密码",
            footer: "© 2025 {appName}。保留所有权利。"
        },
    },
} as const;