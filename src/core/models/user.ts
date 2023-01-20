export type Status = "active" | "inactive";

export type Model = Readonly<{
  id: string;
  name: string;
  email: string;
  status: Status;
}>;

export function toActive(model: Model, status: Status): Model {
  return { ...model, status: status };
}

export function isActive(model: Model) {
  return model.status === "active";
}

export function empty(): Model {
  return {
    id: "",
    name: "",
    email: "",
    status: "inactive",
  };
}
