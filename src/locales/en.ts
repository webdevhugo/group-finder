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
        save: "Save",
        cancel: "Cancel",
        success: "Success",
        error: "Error",
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
        title: "Group Settings",
        groupImage: "Group Image",
        groupImageDescription: "Upload a group image to make your group stand out.",
        groupName: "Group Name",
        groupVisibility: "Group Visibility",
        groupVisibilityDescription: "Groups are private by default. If you want random people on the internet to find and join your group without an invite, switch this to on.",
        groupDescription: "Group Description",
        save: "Save",
        nameUpdated: "Name Updated",
        nameUpdatedMessage: "Name updated successfully.",
        updateSuccessful: "Update Successful",
        descriptionUpdatedMessage: "Your group description has been updated.",
        errorMessage: "Uh-oh, something went wrong",
        descriptionErrorMessage: "Your description was not successfully updated.",
        socialLinks: {
            title: "Social Links",
            youtube: "Youtube",
            discord: "Discord",
            x: "X",
            github: "Github",
            updated: "Group Updated",
            updatedMessage: "Your social links have been updated.",
            errorMessage: "Failed to update social links.",
        },
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
            members: "members",
        },
    },
    group: {
        header: {
            members: "{count} members",
            upcomingEvents: "{count} upcoming events",
            privateGroup: "Private Group",
        },
        tabs: {
            info: "Info",
            posts: "Posts",
            events: "Events",
            members: "Members",
            settings: "Settings",
            danger: "Danger",
        },
        notFound: {
            title: "Uh-oh, this route wasn't found",
            viewGroupInfo: "View Group Info",
        },
        danger: {
            title: "Danger",
            deleteGroup: "Delete this Group",
            deleteDescription: "Delete this group and all it's data.",
            deleteButton: "Delete Group",
            deleteConfirmTitle: "Delete Group",
            deleteConfirmDescription: "Are you sure you want to delete this group? All your members will no longer be able to view the group information and all data will be removed from our system.",
            cancelButton: "Cancel",
            successMessage: "You left this group.",
            errorMessage: "Something went wrong delete your group.",
        },
        events: {
            title: "Events",
            noEvents: "No events created yet",
            upcoming: "Upcoming",
            noUpcoming: "No upcoming events found",
            expired: "Expired",
            noExpired: "No expired events found",
            createButton: "Create Event",
            createDescription: "Fill in the form below to create an event.",
            editEvent: "Edit Event",
            editEventDescription: "Edit the event details",
            deleteEvent: "Delete Event",
            deleteEventConfirmation: "Are you sure you want to delete this event? Your members might be confused or upset if you delete this event.",
            cancel: "Cancel",
            delete: "Delete",
            form: {
                eventName: "Event Name",
                description: "Description",
                dateOfEvent: "Date of Event",
                pickDate: "Pick a date",
                timeOfEvent: "Time of Event",
                hours: "Hours",
                minutes: "Minutes",
                period: "Period",
                image: "Image",
                saveUpdates: "Save Updates",
                createEvent: "Create Event",
                errorTitle: "Error creating event",
                successMessage: "Event created successfully.",
                errorMessage: "Something went wrong creating your event.",
            },
        },
        info: {
            title: "Info",
            groupNotFound: "Group not found",
            saveChanges: "Save Changes",
            successMessage: "Group info has been updated.",
            errorMessage: "The group info failed to update.",
        },
        posts: {
            title: "Posts",
            noPosts: "No posts created yet",
            createButton: "Create Post",
            backToPosts: "Back to Posts",
            replies: "Replies",
            managePost: "Manage post",
            readPost: "Read post",
            deletePost: "Delete Post",
            deletePostConfirm: "Are you sure you want to delete this post?",
            deletePostSuccess: "Post deleted successfully",
            form: {
                postTitle: "Title",
                message: "Message",
                createPost: "Create Post",
                updatePost: "Update Post",
                errorTitle: "Error creating post",
                errorUpdateTitle: "Error updating post",
                successMessage: "Post created successfully.",
                updateSuccessMessage: "Post updated successfully.",
                errorMessage: "Something went wrong creating your post.",
                updateErrorMessage: "Something went wrong updating your post.",
            },
            createPostTitle: "Create Post",
            createPostDescription: "Fill in the form below to create a post.",
            reply: {
                title: "Message",
                postReply: "Post Reply",
                updateReply: "Update Reply",
                errorTitle: "Error creating reply",
                errorUpdateTitle: "Error updating reply",
                successMessage: "Reply created successfully.",
                updateSuccessMessage: "Reply updated successfully.",
                errorMessage: "Something went wrong creating your reply.",
                errorUpdateMessage: "Something went wrong updating your reply.",
                editReply: "Edit Reply",
                editReplyDescription: "Update the message in your reply",
                deleteReply: "Delete Reply",
                deleteReplyConfirm: "Are you sure you want to delete this reply?",
                deleteReplySuccess: "Reply deleted",
            },
        },
        members: {
            title: "Members",
            owner: "Owner",
            admin: "Admin",
            members: "Members",
            invite: {
                button: "Send Invite",
                title: "Invite a Friend",
                description: "Enter the email of the person you want to invite to this group.",
                emailLabel: "Email",
                emailPlaceholder: "webdevcody@gmail.com",
                inviteButton: "Invite",
                cancelButton: "Cancel",
                successTitle: "Invite Sent",
                successMessage: "Tell your friend to check their email.",
                errorMessage: "Failed to send invite.",
            },
        },
    },
    profile: {
        settings: {
            displayName: "Display Name",
            nameUpdated: "Name Updated",
            nameUpdatedMessage: "Name updated successfully.",
            errorMessage: "Failed to update profile name.",
            bio: {
                saveChanges: "Save Changes",
                successMessage: "Your profile bio has been updated.",
                errorMessage: "Your profile bio failed to update.",
            },
        },
        tabs: {
            bio: "Bio",
            recentPosts: "Recent Posts",
            groups: "Groups",
            followers: "Followers",
        },
        header: {
            editProfile: "Edit your Profile",
            follow: "Follow",
            unfollow: "Unfollow",
        },
        noBio: "This user has no bio",
        noPosts: "This user has no posts yet",
        noGroups: "This user isn't part of any groups",
        noFollowers: "This user has no followers",
        viewGroup: "View Group",
    },
    email: {
        invite: {
            previewText: "You've been invited to a group!",
            inviteText: "You've been invited to a group on groupfinder.com called",
            loginButton: "Login to View Group",
            rights: "All rights reserved.",
        },
    },
    notifications: {
        title: "Your Notifications",
        empty: "You have no notifications",
        markAllRead: "Mark all as read",
        clearRead: "Clear read notifications",
        success: "Success",
        markedAsRead: "All messages were marked as read.",
        cleared: "Read messages were cleared.",
        confirmClear: "Are you sure?",
        confirmClearDesc: "This will permanently clear all your read notifications from the system.",
        cancel: "Cancel",
        clearButton: "Clear Notifications",
        view: "View",
        read: "Read"
    },
    error: {
        authTitle: "Oops! You Need to Be Logged In",
        authMessage: "To access this page, please log in first.",
        signIn: "Sign In",
        genericTitle: "Oops! Something went wrong"
    },
} as const;