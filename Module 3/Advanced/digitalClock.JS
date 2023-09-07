
class DigitalClock {
    constructor(prefix) {
      this.prefix = prefix;
    }
  
    display() {
      let date = new Date();
      let [hours, mins, secs] = [date.getHours(), date.getMinutes(), date.getSeconds()];
  
      if (hours < 10) hours = '0' + hours;
      if (mins < 10) mins = '0' + mins;
      if (secs < 10) secs = '0' + secs;
  
      console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
    }
  
    stop() {
      clearInterval(this.timer);
    }
  
    start() {
      this.display();
      this.timer = setInterval(() => this.display(), 1000);
    }
  }
  
  
  class AlarmClock extends DigitalClock {
    constructor(prefix, wakeupTime = '06:30') {
      super(prefix); 
      this.wakeupTime = wakeupTime;
      this.wakeupTimeReached = false; 
    }
  
    display() {
      if (!this.wakeupTimeReached) {
        super.display(); 
        const currentTime = new Date();
        const formattedCurrentTime = `${currentTime.getHours()}:${currentTime.getMinutes()}`;
  
        if (formattedCurrentTime === this.wakeupTime) {
          this.stop();
          console.log('Wake Up');
          this.wakeupTimeReached = true;
        }
      }
    }
  }
  
  
  const alarmClock = new AlarmClock('My Alarm:', '20:55');
  
  
  alarmClock.start();