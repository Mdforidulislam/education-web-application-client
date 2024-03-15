/* eslint-disable react/prop-types */


const SectionBanner = ({headLine, text}) => {
    return (
        <div className="bg-[url('https://i.postimg.cc/nrrTFN5S/assortment-teacher-s-day-elements.jpg')] h-[400px] bg-no-repeat bg-cover">
        <div className="items-center py-28 text-white px-16 h-[400px] bg-black bg-opacity-10">
        <h3 className="text-2xl font-semibold">{headLine}</h3>
        <h3 className="text-6xl font-semibold">{text}</h3>
        </div>
        </div>
    );
};

export default SectionBanner;