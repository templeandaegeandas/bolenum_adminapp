export class UserDetailEntity {
  firstName: String;
  lastName: String;
  emailId: String;
  mobileNo: Number;

  constructor(firstName: String, lastName: String, emailId: String, mobileNo: Number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.emailId = emailId;
    this.mobileNo = mobileNo;
  }
}
