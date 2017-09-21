export class UserDetailEntity {
  firstName: String;
  lastName: String;
  emailId: String;
  mobileNo: Number;
  // userkyc: {
  //   document: String;
  //   documentStatus: String;
  //   isVerified: Boolean;
  // }
  constructor(firstName: String,
    lastName: String,
    emailId: String,
    mobileNo: Number,
    ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.emailId = emailId;
    this.mobileNo = mobileNo;
    // this.userkyc.document = userKyc.document;
    // this.userkyc.documentStatus = userKyc.documentStatus;
    // this.userkyc.isVerified = userKyc.isVerified;
  }
}
