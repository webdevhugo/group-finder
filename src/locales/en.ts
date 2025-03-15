export default {
    common: {
        viewDashboard: "View Dashboard",
        createAccount: "Create an Account",
        signIn: "Sign In",
        goToDashboard: "Go to Dashboard",
        upgradeNow: "Upgrade now",
        signInToUpgrade: "Sign in to Upgrade",
        settings: "Settings",
        signOut: "Sign Out",
    },
    landing: {
        hero: {
            badge: "Discover like-minded individuals",
            title: "Create and Discover New Hobby Groups",
            description: "Our online service makes it easy to connect with others who share your interests, whether it's hiking, painting, or playing soccer. Create or join a group, schedule meetups, and enjoy pursuing your passions with new friends by your side. Start building your community today!",
        },
        pricing: {
            title: "Simple pricing for everyone",
            subtitle: "Choose the plan that suits you best. Enjoy full access to premium content and expert support. Start your journey today and achieve your goals!",
            includes: "What this plan includes:",
            basic: "Basic",
            premium: "Premium",
            perMonth: "/ month",
            features: {
                solution: "Complete Next.js Solution",
                stripe: "Stripe Integration",
                auth: "User Authentication",
                authorization: "Role Based Authorization",
                dashboard: "User Dashboard",
            },
        },
    },
    footer: {
        company: "Company",
        helpCenter: "Help center",
        twitter: "Twitter",
        legal: "Legal",
        privacyPolicy: "Privacy Policy",
        termsOfService: "Terms of Service",
        rights: "is a registered trademark protected by law. No one may use this trademark in any form without written authorization; otherwise, legal action will be pursued in accordance with the law.",
        rightsChina: "AIGC projects in Mainland China are provided by Boiling Universe (Shenzhen) Film and Television Co., Ltd. to comply with Chinese legal regulations.",
    },
    menu: {
        yourGroups: "Your Groups",
        browseGroups: "Browse Groups",
        apiDocs: "API Docs",
        features: "Features",
        pricing: "Pricing",
    },
    settings: {
        theme: {
            toggle: "Toggle theme",
            light: "Light",
            dark: "Dark",
            system: "System"
        }
    },
    browse: {
        title: "Browse Groups",
        searchPlaceholder: "basketball, programming, crafting, etc.",
        searchButton: "Search",
        noResults: "No groups matching your search",
    },
    dashboard: {
        title: "Your Groups",
        ownedGroupsTitle: "Groups You Manage",
        noOwnedGroups: "You don't manage any groups",
        otherGroupsTitle: "Your Other Groups",
        noOtherGroups: "You're not part of any groups",
        emptyState: {
            title: "Uh-oh, you don't own any groups",
            createButton: "Create Group",
            browseButton: "Browse Groups",
        },
        groupCard: {
            manageButton: "Manage Group",
            viewButton: "View Group",
            viewButtonBrowse: "View",
        },
    },
} as const;