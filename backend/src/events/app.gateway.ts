import {
  SubscribeMessage,
  WebSocketGateway,
  OnGatewayInit,
} from "@nestjs/websockets";
import { Logger } from "@nestjs/common";

@WebSocketGateway(3001)
export class AppGateway implements OnGatewayInit {
  private logger: Logger = new Logger("AppGateway");

  afterInit(server: any) {
    // throw new Error('Method not implemented.'); - comment this
    this.logger.log("Initialized");
  }
  // export class AppGateway {
  @SubscribeMessage("message")
  handleMessage(client: any, payload: any): string {
    return "Hello world!";
  }
}
