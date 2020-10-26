import consultationSvg from "../assets/images/flaticon/svg/001-consultation.svg";
import discussionSvg from "../assets/images/flaticon/svg/002-discussion.svg";
import turnoverSvg from "../assets/images/flaticon/svg/003-turnover.svg";
import gear from "../assets/images/flaticon/svg/004-gear.svg";
import conflict from "../assets/images/flaticon/svg/005-conflict.svg";
import meeting from "../assets/images/flaticon/svg/006-meeting.svg";
import brainstorming from "../assets/images/flaticon/svg/007-brainstorming.svg";

export default {
    getBlogs(images, no_of_blogs) {
        let blogs = [];
        let noofblogs = new Array(no_of_blogs);
        for(var i = 0; i < noofblogs.length; i++){
               blogs.push({
                 id: i+1,
                title: 'Behind the word mountains',
                date: 'January 20, 2019 • 3 Comments',
                image: images[ i % images.length]
              });
        }

        return blogs;
    },

    getServices() {
       return [
        {
          name: "Medical Billing",
          description:
            "We specialize in providing medical billing solutions across specialties. Right from Charge Capture to Denials, we handle it all!",
          icon: gear,
        },
       
        {
          name: "Medical Coding & Audits",
          description:
            "We have certified medical coding experts across specialties including Home Health & Hospice, Radiology, Pathology, etc.",
          icon: conflict,
        },
        {
          name: "Accounts Receivable",
          description:
            "We help our clients to improve cash-flow and reduce days in A/R so that they get paid more, faster and at a much lower cost.",
          icon: meeting,
        },
        {
          name: "Denial Management",
          description:
            "Our highly experienced team of billing professionals are quick, analytical problem solvers of rejected or denied claims.",
          icon: brainstorming,
        },
        {
          name: "End-to-End RCM Solutions",
          description:
            "KBS  provides end-to-end, comprehensive Revenue Cycle Management solutions from payor credentialing to complete billing and collections services.",
          icon: consultationSvg,
        },
        {
          name: "Credit Balance Resolution",
          description:
            "This liability carries with it real and serious financial and compliance risk. It is your fiduciary responsibility to manage these real risks.",
          icon: discussionSvg,
        },
        {
          name: "IT consulting",
          description:
            "IT consulting services are advisory services that help clients assess different technology strategies and, in doing so, align their technology strategies with their business or process strategies.",
          icon: turnoverSvg,
        },
      ]
    }
}