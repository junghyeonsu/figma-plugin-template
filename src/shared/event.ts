import { createEventSystem } from "@figmazing/event";

interface EventMap {
  notify: {
    message: string;
  };
}

export const events = createEventSystem<EventMap>();
