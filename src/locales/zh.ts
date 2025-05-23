export default {
    common: {
        viewDashboard: "管理小组",
        createAccount: "加入我们",
        signIn: "登录",
        goToDashboard: "前往仪表板",
        upgradeNow: "选择此方案",
        signInToUpgrade: "立即加入",
        settings: "设置",
        signOut: "登出",
        save: "保存",
        cancel: "取消",
        success: "成功",
        error: "错误",
        errors: {
            file: {
                notImage: "文件必须是图片格式",
                tooLarge: "文件大小超过限制，最大允许 {size}MB"
            }
        },
        notifications: {
            event: {
                created: "你加入的小组 \"{groupName}\" 创建了新活动"
            }
        }
    },
    landing: {
        hero: {
            badge: "为故事而生",
            title: "寻找一起讲故事的人",
            description: "汇聚每一份对好故事的热爱。我们致力于连接创作者的才华、观众的期待与投资者的远见，共同打造一个充满活力与想象力的短剧创作与分享社区。",
        },
        pricing: {
            title: "生态合作伙伴计划",
            subtitle: "我们诚邀AI技术服务商、内容发行平台、短剧出品方及相关产业链伙伴，共同参与[The Group Finder]的生态建设。本社区汇聚了对AIGC技术充满热忱的创作者、经验丰富的编剧导演及活跃的早期用户。他们不仅是你前沿技术与服务的理想验证者与反馈者，更是塑造未来影像内容的生力军。成为我们的生态伙伴，你将精准触达高价值的AIGC创作人群，提升品牌行业影响力，共同培育并见证一个新兴文化科技领域的蓬勃发展。",
            includes: "此计划包括：",
            basic: "社区支持伙伴",
            premium: "生态共建伙伴",
            perMonth: "/ 月",
            basicfeatures: {
                solution: "社区支持伙伴认证",
                stripe: "平台标准名录展示",
                auth: "月度社群邮件鸣谢",
                authorization: "获取社群最新动态",
                dashboard: "页脚合作伙伴Logo展示 (标准)",
            },
            premiumfeatures: {
                solution: "包含社区支持伙伴所有权益",
                stripe: "平台核心位置优先展示",
                auth: "官方认证生态伙伴徽章",
                authorization: "优先参与及赞助社区官方活动",
                dashboard: "季度合作效果简报与行业洞察",
                support: "专属合作对接人服务",
            },
            supportTitle: "你的支持将如何助力社区？",
            supportDescription: "每一份支持都将用于[The Group Finder]平台的持续优化、创作者激励、优质内容扶持及社群活动的组织，共同营造繁荣、健康的AIGC创作生态。"
        },
    },
    footer: {
        company: "联系我",
        helpCenter: "帮助中心",
        twitter: "推特",
        wechat: "微信",
        legal: "法律",
        privacyPolicy: "隐私政策",
        termsOfService: "服务条款",
    },
    menu: {
        yourGroups: "你的小组",
        browseGroups: "发现小组",
        apiDocs: "社区行为准则",
        features: "探索发现",
        pricing: "生态合作",
    },
    settings: {
        title: "小组设置",
        groupImage: "小组图片",
        groupImageDescription: "上传小组图片使你的小组更加突出。",
        groupName: "小组名称",
        groupVisibility: "小组可见性",
        groupVisibilityDescription: "小组默认为私密。如果你希望互联网上的随机用户无需邀请即可找到并加入你的小组，请将此选项打开。",
        groupDescription: "小组描述",
        save: "保存",
        nameUpdated: "名称已更新",
        nameUpdatedMessage: "名称更新成功。",
        updateSuccessful: "更新成功",
        descriptionUpdatedMessage: "你的小组描述已更新。",
        errorMessage: "出现错误",
        descriptionErrorMessage: "你的描述未能成功更新。",
        socialLinks: {
            title: "社交链接",
            youtube: "YouTube",
            discord: "Discord",
            x: "X",
            github: "Github",
            updated: "小组已更新",
            updatedMessage: "你的社交链接已更新。",
            errorMessage: "更新社交链接失败。",
        },
        theme: {
            toggle: "切换主题",
            light: "浅色",
            dark: "深色",
            system: "系统"
        },
        bioTitle: "个人简介",
        languageTitle: "语言",
        languageToggle: "切换语言",
        themeTitle: "主题",
        themeToggle: "切换主题",
        tab: {
            profile: "个人资料",
            security: "安全",
            subscription: "订阅",
            danger: "危险"
        },
        accountSettings: "账户设置",
        switchToProfile: "切换到个人资料",
        security: {
            sessions: "会话",
            sessionsDescription: "如果你在多个设备上登录，你可以强制注销所有设备。",
            logoutAllSessions: "注销所有会话"
        },
        danger: {
            deleteAccount: "删除账户",
            deleteAccountDescription: "删除你的账户意味着你将无法在未来恢复你的数据。请输入 Please delete 确认。",
            deleteAccountTitle: "你确定吗？",
            confirm: "确认",
            cancel: "取消",
            failedToDeleteAccount: "删除账户失败。",
            accountDeleted: "账户已删除",
            accountDeletedDescription: "你的账户已成功删除。",
        }
    },
    browse: {
        title: "浏览小组",
        searchPlaceholder: "AI造梦社、未来光影工作室等",
        searchButton: "搜索",
        noResults: "没有找到匹配的小组",
    },
    dashboard: {
        title: "你的小组",
        ownedGroupsTitle: "你管理的小组",
        noOwnedGroups: "你没有管理任何小组",
        otherGroupsTitle: "你参与的小组",
        noOtherGroups: "你没有参与任何小组",
        emptyState: {
            title: "你还没有创建任何小组",
            createButton: "创建小组",
            browseButton: "浏览小组",
            createTitle: "创建小组",
            createDescription: "创建一个小组，与伙伴们一起开启你们的AIGC故事创作之旅吧！",
        },
        groupCard: {
            manageButton: "管理小组",
            viewButton: "查看小组",
            viewButtonBrowse: "查看",
            members: "位成员",
        },
        groupCreated: "小组创建成功",
        groupCreatedDescription: "现在就开始邀请你的创作伙伴吧。",
        somethingWentWrong: "出了点问题",
        groupName: "小组名称",
        groupDescription: "小组描述",
        createGroup: "创建小组",
        save: "保存",
        nameUpdated: "名称已更新",
        nameUpdatedDescription: "名称更新成功。",
        failedToUpdateGroupName: "更新小组名称失败。",
        updateSuccessful: "更新成功",
        updateSuccessfulDescription: "小组可见性已更新。",
        isGroupPublic: "小组是否公开",
        failedToUpdateGroupDescription: "更新小组描述失败。",
        updateDescriptionSuccessfulDescription: "你的描述已更新。",
        ohSomethingWentWrong: "哎呀，出了点问题",
        upload: "上传",
        image: "图片",
        imageUpdated: "图片已更新",
        imageUpdatedGroupDescription: "你已成功更新小组图片。",
        imageUpdatedProfileDescription: "你已成功更新个人图片。",
        failedToUpdateGroupImage: "更新小组图片失败。",
        failedToUpdateProfileImage: "更新个人图片失败。",
        profileImage: "个人图片",
        profileBioUpdated: "你的个人简介已更新。",
        failedToUpdateProfileBio: "更新个人简介失败。",
        saveChanges: "保存更改",
        displayName: "显示名称",
        failedToUpdateProfileName: "更新显示名称失败。",
    },
    group: {
        header: {
            members: "{count} 位成员",
            upcomingEvents: "{count} 场即将举行的活动",
            privateGroup: "私密",
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
            deleteConfirmDescription: "你确定要删除此小组吗？所有成员将无法再查看小组信息，所有数据将从我们的系统中删除。",
            cancelButton: "取消",
            successMessage: "你已离开此小组。",
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
            createDescription: "填写下面的表单以创建活动。",
            editEvent: "编辑活动",
            editEventDescription: "编辑活动详情",
            deleteEvent: "删除活动",
            deleteEventConfirmation: "你确定要删除此活动吗？删除此活动可能会使你的成员感到困惑。",
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
            deletePostConfirm: "你确定要删除此帖子吗？",
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
            createPostDescription: "填写下面的表单以创建帖子。",
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
                editReplyDescription: "更新你的回复内容",
                deleteReply: "删除回复",
                deleteReplyConfirm: "你确定要删除此回复吗？",
                deleteReplySuccess: "回复已删除",
            },
        },
        members: {
            title: "成员",
            owner: "所有者",
            admin: "管理员",
            members: "普通成员",
            invite: {
                button: "发送邀请",
                title: "邀请好友",
                description: "输入你想邀请加入此小组的人的电子邮件。",
                emailLabel: "电子邮件",
                emailPlaceholder: "yourname@example.com",
                inviteButton: "邀请",
                cancelButton: "取消",
                successTitle: "邀请已发送",
                successMessage: "提醒你的朋友查看他们的电子邮件。",
                errorMessage: "发送邀请失败。",
                processingTitle: "正在处理邀请",
                loginPrompt: "有人向你发送了邀请，但你需要先登录才能接受邀请。请点击下面的按钮登录。",
                loginButton: "登录以接受邀请",
                errors: {
                    notFoundOrExpired: "此邀请不存在或已过期",
                    expired: "此邀请已过期",
                },
                emailSubject: "你被邀请加入 {appName} 上的一个小组",
            },
            memberActions: {
                kickTitle: "移除成员",
                kickDescription: "你确定要将该成员移出小组吗？",
                kickConfirm: "移除",
                promoteToAdmin: "升级为管理员",
                demoteToMember: "降级为普通成员",
                kick: "移除",
            }
        },
        join: {
            button: "加入群组",
            success: {
                title: "成功",
                description: "你已加入此群组"
            }
        },
        leave: {
            button: "退出群组",
            dialog: {
                title: "退出群组",
                description: "你确定要退出此群组吗？如果这是一个私密群组，管理员需要重新邀请你才能加入。",
                cancel: "取消",
                confirm: "退出群组"
            },
            success: {
                title: "成功",
                description: "你已退出此群组。"
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
                successMessage: "你的个人简介已更新。",
                errorMessage: "你的个人简介更新失败。",
            },
        },
        tabs: {
            bio: "简介",
            recentPosts: "最近帖子",
            groups: "小组",
            followers: "关注者",
        },
        header: {
            editProfile: "编辑你的个人资料",
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
            preview: "你收到了一个群组邀请！",
            message: "你被邀请加入 thegroupfinder.com 上的小组 {groupName}。点击下方链接登录并访问你的小组。",
            actionButton: "登录以查看小组",
            footer: "© 2025 {appName}。保留所有权利。"
        },
        magicLink: {
            preview: "你收到了一个群组邀请！",
            message: "你的登录链接在下方，点击即可登录。",
            button: "使用链接登录",
            footer: "© 2025 {appName}。保留所有权利。"
        }
    },
    notifications: {
        title: "你的通知",
        empty: "你没有任何通知",
        markAllRead: "全部标记为已读",
        viewAll: "查看通知",
        headerTitle: "通知",
        dropdownEmpty: "没有新的通知",
        clearRead: "清除已读通知",
        success: "成功",
        markedAsRead: "所有消息已标记为已读。",
        cleared: "已读消息已清除。",
        confirmClear: "你确定吗？",
        confirmClearDesc: "这将永久清除系统中所有你已读的通知。",
        cancel: "取消",
        clearButton: "清除通知",
        view: "查看",
        read: "已读"
    },
    error: {
        auth: {
            authentication: "你必须登录后才能查看此内容",
            privateGroup: "你没有权限查看此群组",
            notFound: "未找到"
        },
        user: {
            deleteAccount: "你只能删除自己的账号",
            notFound: "未找到用户",
            emailExists: "该邮箱已被注册",
            invalidToken: "无效的令牌",
            loginError: "邮箱或密码错误"
        },
        file: {
            notImage: "文件必须是图片格式",
            tooLarge: "文件大小不能超过 {maxSize}MB"
        },
        authTitle: "哎呀！你需要先登录",
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
                description: "祝你使用愉快"
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
            description: "你已成功退出登录。现在可以重新登录你的账号。",
            button: "登录"
        },
        forgotPassword: {
            title: "忘记密码",
            button: "发送重置邮件",
            email: "邮箱",
            emailPlaceholder: "请输入邮箱",
            success: {
                title: "重置链接已发送",
                description: "我们已向你发送了一封包含密码重置链接的邮件。"
            }
        },
        magicLink: {
            title: "请查看你的邮箱",
            description: "我们已向你发送了一个登录链接。请点击邮件中的链接进行登录。",
            error: {
                title: "令牌已过期",
                description: "抱歉，此令牌已过期或已被使用。请尝试重新登录",
                button: "登录"
            }
        },
        verify: {
            title: "邮箱验证成功",
            description: "你的邮箱已成功验证。现在可以登录你的账号了。",
            button: "登录",
            preview: "验证你的邮箱",
            message: "点击以下链接验证你的邮箱",
            footer: "© 2025 {appName}。保留所有权利。",
            verifyButton: "验证邮箱"
        },
        resetPassword: {
            preview: "重置你的密码",
            message: "点击以下链接重置密码",
            button: "重置密码",
            footer: "© 2025 {appName}。保留所有权利。"
        },
    },
    users: {
        unfollow: "取消关注",
        unfollowedUser: "你已取消关注该用户。",
        failedToUnfollowUser: "取消关注时出现错误。",
        follow: "关注",
        followedUser: "你已关注该用户。",
        failedToFollowUser: "关注时出现错误。",
    },
    replies: {
        postNotFound: "帖子未找到",
        userDoesNotHaveAccessToGroup: "你没有权限访问此群组",
        userDoesNotHavePermissionToReplyToPost: "你没有权限回复此帖子",
        userDoesNotHavePermissionToDeleteReply: "你没有权限删除此回复",
        userDoesNotHaveAccessToReply: "你没有权限访问此回复",
        replyNotFound: "回复未找到",
        someoneRepliedToYourPost: "有人回复了你的帖子标题为 {title}。",
    }
} as const;