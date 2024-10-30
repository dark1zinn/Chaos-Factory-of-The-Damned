export default class EventManager {
    constructor() {
        this.events = {};
    }

    subscribe(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }
        this.events[eventName].push(callback);

    }

    subscribeAll(callback) {
        for (const eventName in this.events) {
            this.subscribe(eventName, callback);
        }
    }

    unsubscribe(eventName, callback) {
        if (this.events[eventName]) {
            const index = this.events[eventName].indexOf(callback);
            if (index !== -1) {
                this.events[eventName].splice(index, 1);

            }
        }
    }

    emit(eventName, data) {
        if (this.events[eventName]) {
            this.events[eventName].forEach(callback => {
                callback(data);
            });
        }
    }
}