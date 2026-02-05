/**
 * Enterprise EventBus for decoupled component communication.
 * Implements the Publish-Subscribe pattern with strict typing support.
 */
class EventBus {
    constructor() {
        this.listeners = new Map();
    }

    /**
     * Subscribe to an event topic.
     * @param {string} topic - The event topic
     * @param {Function} callback - The handler
     */
    on(topic, callback) {
        if (!this.listeners.has(topic)) {
            this.listeners.set(topic, []);
        }
        this.listeners.get(topic).push(callback);
    }

    /**
     * Publish an event asynchronously.
     * @param {string} topic 
     * @param {any} data 
     */
    async emit(topic, data) {
        if (!this.listeners.has(topic)) return;
        const callbacks = this.listeners.get(topic);
        await Promise.all(callbacks.map(cb => cb(data)));
    }
}

module.exports = new EventBus();
