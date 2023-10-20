export type Status = "active" | "inactive";

export type Model = {
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly status: Status;
};

export type Json = {
  readonly id?: string;
  readonly name?: string;
  readonly email?: string;
  readonly status?: Status;
};

export function toActive(model: Model, status: Status) {
  return { ...model, status } satisfies Model;
}

export function isActive(model: Model) {
  return model.status === "active";
}

export function empty() {
  return {
    id: "",
    name: "",
    email: "",
    status: "inactive",
  } satisfies Model;
}

export function model(user: Partial<Model>) {
  const { id, name, email, status } = empty();
  return {
    id: user.id ?? id,
    name: user.name ?? name,
    email: user.email ?? email,
    status: user.status ?? status,
  } satisfies Model;
}

export function json(user: Json) {
  return user;
}
