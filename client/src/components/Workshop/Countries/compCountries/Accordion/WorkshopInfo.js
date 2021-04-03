import { ImCross } from "react-icons/im";

const addInfo = `Public transportation options are available nearby.
Face masks provided for travelers. 
Hand sanitizer available to travelers and staff. 
Gear/equipment sanitized between use.
Guestes required to regularly wash hands.`

const impDet = () => {
    return(
        <div className="impDetails">
            <h5>Not included</h5>
            <div className="cross-icon-wrapper">
                <p><span className="cross-icon"><ImCross /></span> Soda</p>
                <p><span className="cross-icon"><ImCross /></span> Coffee and/or Tea</p>
            </div><br/><br/>
            <h5>Additional Info</h5>
            <p className="multiline">{addInfo}</p><br/>
            <h5>Meeting Point</h5>
            <p className="lastline">Please ring the bell at Ganzendries 176, 9000 Ghent and we'll welcome you.</p>
        </div>
    );
}

const AfghanWorkshopInfo = [
    {
        title: 'What We Offer',
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec gravida tincidunt euismod. Mauris lacus mi, vulputate eget sem
        vitae, imperdiet consectetur urna. In ante sapien, mattis eu nisi ut,
        malesuada fringilla massa. Ut pulvinar, quam quis interdum convallis,
        sem dolor ullamcorper lacus, vel tristique felis nunc in risus.
        Duis ex dolor, commodo vitae metus ac, egestas tincidunt turpis.
        Morbi leo quam, ornare molestie pellentesque interdum, euismod ut magna.
        Aliquam tincidunt orci vulputate interdum varius.`
    },
    {
        title: 'Important Details',
        content: impDet()
    },
    {
        title: 'Cancellation Policy',
        content: 'For a full refund, cancel at least 24 hours before the start of the workshop.'
        
    }
];

const CongoWorkshopInfo = [
    {
        title: 'What We Offer',
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec gravida tincidunt euismod. Mauris lacus mi, vulputate eget sem
        vitae, imperdiet consectetur urna. In ante sapien, mattis eu nisi ut,
        malesuada fringilla massa. Ut pulvinar, quam quis interdum convallis,
        sem dolor ullamcorper lacus, vel tristique felis nunc in risus.
        Duis ex dolor, commodo vitae metus ac, egestas tincidunt turpis.
        Morbi leo quam, ornare molestie pellentesque interdum, euismod ut magna.
        Aliquam tincidunt orci vulputate interdum varius.`
    },
    {
        title: 'Important Details',
        content: impDet()
    },
    {
        title: 'Cancellation Policy',
        content: 'For a full refund, cancel at least 24 hours before the start of the workshop.'
    }
];

const HongWorkshopInfo = [
    {
        title: 'What We Offer',
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec gravida tincidunt euismod. Mauris lacus mi, vulputate eget sem
        vitae, imperdiet consectetur urna. In ante sapien, mattis eu nisi ut,
        malesuada fringilla massa. Ut pulvinar, quam quis interdum convallis,
        sem dolor ullamcorper lacus, vel tristique felis nunc in risus.
        Duis ex dolor, commodo vitae metus ac, egestas tincidunt turpis.
        Morbi leo quam, ornare molestie pellentesque interdum, euismod ut magna.
        Aliquam tincidunt orci vulputate interdum varius.`
    },
    {
        title: 'Important Details',
        content: impDet()
    },
    {
        title: 'Cancellation Policy',
        content: 'For a full refund, cancel at least 24 hours before the start of the workshop.'
    }
];

const IndoWorkshopInfo = [
    {
        title: 'What We Offer',
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec gravida tincidunt euismod. Mauris lacus mi, vulputate eget sem
        vitae, imperdiet consectetur urna. In ante sapien, mattis eu nisi ut,
        malesuada fringilla massa. Ut pulvinar, quam quis interdum convallis,
        sem dolor ullamcorper lacus, vel tristique felis nunc in risus.
        Duis ex dolor, commodo vitae metus ac, egestas tincidunt turpis.
        Morbi leo quam, ornare molestie pellentesque interdum, euismod ut magna.
        Aliquam tincidunt orci vulputate interdum varius.`
    },
    {
        title: 'Important Details',
        content: impDet()
    },
    {
        title: 'Cancellation Policy',
        content: 'For a full refund, cancel at least 24 hours before the start of the workshop.'
    }
];

export {AfghanWorkshopInfo, CongoWorkshopInfo, HongWorkshopInfo, IndoWorkshopInfo}