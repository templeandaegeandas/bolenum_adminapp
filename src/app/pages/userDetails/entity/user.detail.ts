export class UserDetailEntity {
  firstName: String;
  lastName: String;
  emailId: String;
  mobileNo: Number;
  country: String;
  state: String;
  // userkyc: {
  //   document: String;
  //   documentStatus: String;
  //   isVerified: Boolean;
  // }
  constructor(firstName: String,
    lastName: String,
    emailId: String,
    mobileNo: Number,
    country: String,
    state: String
    ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.emailId = emailId;
    this.mobileNo = mobileNo;
    this.country = country;
    this.state = state;
    // this.userkyc.document = userKyc.document;
    // this.userkyc.documentStatus = userKyc.documentStatus;
    // this.userkyc.isVerified = userKyc.isVerified;
  }
}
