import { Injectable } from "@angular/core";
import { HttpClient } from "../../../app.client.interceptor";
import "rxjs/add/operator/map";

@Injectable()
export class BaMsgCenterService {
  pageNumber: any;
  constructor(private http: HttpClient) {}

  GetUserNotification(
    currentPage: number,
    pageSize: number,
    sortBy: String,
    sortOrder: String
  ) {
    this.pageNumber = currentPage - 1;
    return this.http
      .get(
        "/api/v1/user/notification?pageNumber=" +
          this.pageNumber +
          "&pageSize=" +
          pageSize +
          "&sortBy=" +
          sortBy +
          "&sortOrder=" +
          sortOrder
      )
      .map(res => res.json());
  }

  getTotalOfUnseeNotification() {
    return this.http
      .get("/api/v1/user/count/notification")
      .map(res => res.json());
  }

  changeReadStatusOfUserNotification(arrayOfNotification) {
    return this.http
      .put(
        "/api/v1/user/notification?arrayOfNotification=" + arrayOfNotification,
        ""
      )
      .map(res => res.json());
  }
}
