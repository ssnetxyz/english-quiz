<template>
  <div class="page">
    <div class="schedule">
      <h2>
        <EnjaSentence 
          ref="brian" 
          :mp3="classesMp3" 
          :raw-marks="classesMarks" />
      </h2>

      <h3><EnjaSentence ref="brian" :mp3="primaryMp3" :raw-marks="primaryMarks"></EnjaSentence></h3>
      <p><EnjaSentence ref="brian" :mp3="primaryScheduleMp3" :raw-marks="primaryScheduleMarks"></EnjaSentence></p>
      <p class="dimmed">幼児・小学生 月・火PM5：30～6：30</p>
      <hr>


      <h3><EnjaSentence ref="brian" :mp3="studentsMp3" :raw-marks="studentsMarks"></EnjaSentence></h3>
      <p><EnjaSentence ref="brian" :mp3="studentScheduleMp3" :raw-marks="studentScheduleMarks"></EnjaSentence></p>
      <p class="dimmed">中・高校生     日・月PM6：30～7：30</p>
      <hr>

      <h3><EnjaSentence ref="brian" :mp3="adultsMp3" :raw-marks="adultsMarks"></EnjaSentence></h3>
      <p><EnjaSentence ref="brian" :mp3="adultsScheduleMp3" :raw-marks="adultsScheduleMarks"></EnjaSentence></p>
      <p class="dimmed">社会人    日PM5：30～6：30<br>火PM6：30～7：30</p>
    </div>
    <div class="sidebar">
      <SvgCalendar/>
    </div>

  </div>
</template>

<script>
import SvgCalendar from '@/components/SvgCalendar';
import EnjaSentence from '@/components/EnjaSentence';

import classesMp3 from '@/sounds/this-is-the-class-schedule.mp3';
import classesMarks from 'url-loader!@/sounds/this-is-the-class-schedule.marks';

import primaryMp3 from '@/sounds/primary-and-younger.mp3';
import primaryMarks from 'url-loader!@/sounds/primary-and-younger.marks';
import adultsMp3 from '@/sounds/adults.mp3';
import adultsMarks from 'url-loader!@/sounds/adults.marks';
import studentsMp3 from '@/sounds/middle-and-high-school.mp3';
import studentsMarks from 'url-loader!@/sounds/middle-and-high-school.marks';
import primaryScheduleMp3 from '@/sounds/mondays-tuesdays.mp3';
import primaryScheduleMarks from 'url-loader!@/sounds/mondays-tuesdays.marks';
import studentScheduleMp3 from '@/sounds/mondays-tuesdays.mp3';
import studentScheduleMarks from 'url-loader!@/sounds/mondays-tuesdays.marks';
import adultsScheduleMp3 from '@/sounds/monday-or-tuesday.mp3';
import adultsScheduleMarks from 'url-loader!@/sounds/monday-or-tuesday.marks';


export default {
  name: 'Schedule',

  components: { EnjaSentence, SvgCalendar },
  data: () => ({
    classesMp3, classesMarks,
    primaryMp3, primaryMarks,
    studentsMp3, studentsMarks,
    adultsMp3, adultsMarks,
    primaryScheduleMp3, primaryScheduleMarks,
    studentScheduleMp3, studentScheduleMarks,
    adultsScheduleMp3, adultsScheduleMarks
  })}

</script>