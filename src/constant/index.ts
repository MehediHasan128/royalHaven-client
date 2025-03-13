export type TUser = {
    userEmail: string;
    userId: string;
    userRole: string;
    userName: {
        firstName: string;
        lastName: string;
    };
    userProfileImage: string;
    iat: number;
    exp: number;
  } | null;