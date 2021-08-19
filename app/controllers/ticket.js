import { traceTickets } from "../schema/models/index.js";
import { broadcastMessage, pushMessage } from "../service/connectionService.js";
export async function getTickets() {
  return [
    { id: 1, title: "Title1", expiryAt: "2021-09-21" },
    { id: 2, title: "Title2", expiryAt: "2021-08-01" },
  ];
  // let vendorDetails = await vendorConfigs.findOne({
  //   where: { vendorCode: vendorCode },
  //   raw: true,
  //   attributes: ["vendorBuffer", "fcLocationId", "vendorCutoff"]
  // });
}

export async function createTicket(message) {
  let ticketDetails = message.ticketDetails;
  ticketDetails.status = "OPEN";
  let newTicket = await traceTickets.create(ticketDetails);
  let response = Object.assign(newTicket, { action: "ticketCreated" });
  broadcastMessage(message.group, response);
}

export async function updateTicket(message) {
  const { id } = message.ticketDetails;
  await traceTickets.update(message.ticketDetails, { where: { id } });
}

export async function assignTicket() {}

export async function unassignTicket() {}

export async function openTickets() {}

export async function assignedTickets() {}
