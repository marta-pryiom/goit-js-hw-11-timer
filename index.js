const refs = {
  daysLeft: document.querySelector('[data-value="days"]'),
  hoursLeft: document.querySelector('[data-value="hours"]'),
  minsLeft: document.querySelector('[data-value="mins"]'),
  secsLeft: document.querySelector('[data-value="secs"]'),
  divTimer: document.querySelector('#timer-1'),

  //   daysText: document.querySelector('.label-day'),
  //   hoursText: document.querySelector('.label-hour'),
  //   minsText: document.querySelector('.label-min'),
  //   secsText: document.querySelector('.label-sec'),
};

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }

  intervalId = setInterval(() => {
    const dateNow = new Date().getTime();
    const timeLeft = this.targetDate - dateNow;
    this.timerLeft(timeLeft);
    // this.decOfNum(number, titles);
  }, 1000);

  pad(value) {
    return String(value).padStart(2, '0');
  }

  timerLeft(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    refs.daysLeft.innerHTML = days;
    refs.hoursLeft.innerHTML = hours;
    refs.minsLeft.innerHTML = mins;
    refs.secsLeft.innerHTML = secs;
    // refs.hoursText.innerHTML = decOfNum(hours, ['година', 'години', 'годин']);
    // refs.minsText.innerHTML = decOfNum(mins, ['хвилина', 'хвилини', 'хвилин']);
    // refs.secsText.innerHTML = decOfNum(secs, ['секунда', 'секунди', 'секунд']);
  }
  //   decOfNum(number, titles) {
  //     let decCache = [],
  //       decCases = [2, 0, 1, 1, 1, 2];
  //     if (!decCache[number])
  //       decCache[number] =
  //         number % 100 > 4 && number % 100 < 20
  //           ? 2
  //           : decCases[Math.min(number % 10, 5)];
  //     return titles[decCache[number]];
  //   }
}

const Timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Aug 20,2021'),
});
