import { ref } from "vue";
import { defineStore } from "pinia";

export const useSubject = defineStore("Subject", () => {
  const subject = ref([
    {
        name:'สถาปัตยกรรมคอมพิวเตอร์',
        cd:'คพ 232',
        room:'บรรยายคอม7/3203 ตึกจุฬา(lab)',
    },
    {
        name:'พัฒนาโปรแกรมเว็บ',
        cd:'คพ 313',
        room:'บรรยายคอม8/3203 ตึกจุฬา(lab)',
    },
    {
        name:'หลักสถิติ',
        cd:'สต 301',
        room:'',
    },
    {
        name:'ENG เชิงวิทย์ 2',
        cd:'ศท 242',
        room:'',
    },
    {
        name:'ออกแบบเชิงวัตถุ',
        cd:'คพ 343',
        room:'3203 ตึกจุฬา',
    },
    {
        name:'คณิต สำหรับคอมพิวเตอร์',
        cd:'คพ 252',
        room:'3203 ตึกจุฬา',
    },
  ]);


  return { subject };
});
