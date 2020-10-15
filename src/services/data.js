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
          name: "IT consulting",
          description:
            "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
          icon: gear,
        },
       
        {
          name: "Network Infrastructure",
          description:
            "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
          icon: conflict,
        },
        {
          name: "Network Designing",
          description:
            "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
          icon: meeting,
        },
        {
          name: "Network Support",
          description:
            "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
          icon: brainstorming,
        },
        {
          name: "Corporate Collaboration",
          description:
            "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
          icon: consultationSvg,
        },
        {
          name: "Strategic Partners",
          description:
            "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
          icon: discussionSvg,
        },
        {
          name: "Infinite Posibilities",
          description:
            "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
          icon: turnoverSvg,
        },
      ]
    }
}