interface IUserData {
    email: string;
    uuid: string;
    planId: number;
    planName: string;
}

export default class UserData implements IUserData {
    email: string = "";
    uuid: string = "";
    planId: number = 0;
    planName: string = "";

    constructor(userData?: IUserData, json?: any) {
        if (userData !== undefined) {
            this.uuid = userData.uuid;
            this.email = userData.email;
            this.planId = userData.planId;
            this.planName = userData.planName;
        }

        if (json !== undefined) {
            Object.assign(this, json);
        }
    }
}
