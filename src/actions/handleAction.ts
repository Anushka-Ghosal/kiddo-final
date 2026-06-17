export default function handleAction(action: any) {
  if (!action) return;

  switch (action.type) {
    case "ADD_TO_CART":
      console.log("Add To Cart", action.payload);
      break;

    case "DEEP_LINK":
      console.log("Navigate", action.payload);
      break;

    default:
      console.log("Unknown Action");
  }
}