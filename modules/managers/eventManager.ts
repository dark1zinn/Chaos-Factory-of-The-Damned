export default class EventManager {
    events: any;

    constructor() {
        this.events = {};
    }

    subscribe(eventName: string, callback: any) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }
        this.events[eventName].push(callback);

    }

    subscribeAll(callback: any) {
        for (const eventName in this.events) {
            this.subscribe(eventName, callback);
        }
    }

    unsubscribe(eventName: string, callback: any) {
        if (this.events[eventName]) {
            const index = this.events[eventName].indexOf(callback);
            if (index !== -1) {
                this.events[eventName].splice(index, 1);

            }
        }
    }

    emit(eventName: string, data: any) {
        if (this.events[eventName]) {
            for (const callback of this.events[eventName]) {
                callback(data)
            }
            /* this.events[eventName].forEach(callback => {
                callback(data);
            }); */
        }
    }
}