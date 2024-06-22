import React from "react";
import ImageGallery from "react-image-gallery";
import '../../styles/gallery.css';
import 'react-image-gallery/styles/css/image-gallery.css';


//2003
import año31 from '../../assets/2003/20031.jpg';
import año32 from '../../assets/2003/20032.jpg';
import año33 from '../../assets/2003/20033.jpg';
import año34 from '../../assets/2003/20034.jpg';
import año35 from '../../assets/2003/20035.jpg';
import año36 from '../../assets/2003/20036.jpg';

//2004
import año41 from '../../assets/2004/20041.jpg';
import año42 from '../../assets/2004/20042.jpg';
import año43 from '../../assets/2004/20043.jpg';
import año44 from '../../assets/2004/20044.jpg';
import año45 from '../../assets/2004/20045.jpg';

//2007
import año71 from '../../assets/2007/20071.jpg';
import año72 from '../../assets/2007/20072.jpg';
import año73 from '../../assets/2007/20073.jpg';
import año74 from '../../assets/2007/20074.jpg';
import año75 from '../../assets/2007/20075.jpg';
import año76 from '../../assets/2007/20076.jpg';
import año77 from '../../assets/2007/20077.jpg';
import año78 from '../../assets/2007/20078.jpg';
import año79 from '../../assets/2007/20079.jpg';
import año710 from '../../assets/2007/200710.jpg';
import año711 from '../../assets/2007/200711.jpg';
import año712 from '../../assets/2007/200712.jpg';

//2011
import año111 from '../../assets/2011/20111.jpg';
import año112 from '../../assets/2011/20112.jpg';
import año113 from '../../assets/2011/20113.jpg';
import año114 from '../../assets/2011/20114.jpg';
import año115 from '../../assets/2011/20115.jpg';
import año116 from '../../assets/2011/20116.jpg';
import año117 from '../../assets/2011/20117.jpg';
import año118 from '../../assets/2011/20118.jpg';
import año119 from '../../assets/2011/20119.jpg';
import año1110 from '../../assets/2011/201110.jpg';
import año1111 from '../../assets/2011/201111.jpg';
import año1112 from '../../assets/2011/201112.jpg';
import año1113 from '../../assets/2011/201113.jpg';
import año1114 from '../../assets/2011/201114.jpg';
import año1115 from '../../assets/2011/201115.jpg';
import año1116 from '../../assets/2011/201116.jpg';
import año1117 from '../../assets/2011/201117.jpg';
import año1118 from '../../assets/2011/201118.jpg';

//2012
import año121 from '../../assets/2012/20121.jpg';
import año122 from '../../assets/2012/20122.jpg';
import año123 from '../../assets/2012/20123.jpg';
import año124 from '../../assets/2012/20124.jpg';
import año125 from '../../assets/2012/20125.jpg';
import año126 from '../../assets/2012/20126.jpg';
import año127 from '../../assets/2012/20127.jpg';
import año128 from '../../assets/2012/20128.jpg';
import año129 from '../../assets/2012/20129.jpg';
import año1210 from '../../assets/2012/201210.jpg';
import año1211 from '../../assets/2012/201211.jpg';
import año1212 from '../../assets/2012/201212.jpg';
import año1213 from '../../assets/2012/201213.jpg';
import año1214 from '../../assets/2012/201214.jpg';
import año1215 from '../../assets/2012/201215.jpg';
import año1216 from '../../assets/2012/201216.jpg';
import año1217 from '../../assets/2012/201217.jpg';
import año1218 from '../../assets/2012/201218.jpg';
import año1219 from '../../assets/2012/201219.jpg';
import año1220 from '../../assets/2012/201220.jpg';
import año1221 from '../../assets/2012/201221.jpg';
import año1222 from '../../assets/2012/201222.jpg';

//2013
import año131 from '../../assets/2013/20131.jpg';
import año132 from '../../assets/2013/20132.jpg';
import año133 from '../../assets/2013/20133.jpg';
import año134 from '../../assets/2013/20134.jpg';
import año135 from '../../assets/2013/20135.jpg';
import año136 from '../../assets/2013/20136.jpg';

//2015
import año151 from '../../assets/2015/20151.jpg';
import año152 from '../../assets/2015/20152.jpg';
import año153 from '../../assets/2015/20153.jpg';
import año154 from '../../assets/2015/20154.jpg';
import año155 from '../../assets/2015/20155.jpg';
import año156 from '../../assets/2015/20156.jpg';
import año157 from '../../assets/2015/20157.jpg';
import año158 from '../../assets/2015/20158.jpg';
import año159 from '../../assets/2015/20159.jpg';
import año1510 from '../../assets/2015/201510.jpg';
import año1511 from '../../assets/2015/201511.jpg';
import año1512 from '../../assets/2015/201512.jpg';

//2016
import año161 from '../../assets/2016/20161.jpg';
import año162 from '../../assets/2016/20162.jpg';
import año163 from '../../assets/2016/20163.jpg';
import año164 from '../../assets/2016/20164.jpg';
import año165 from '../../assets/2016/20165.jpg';
import año166 from '../../assets/2016/20166.jpg';
import año167 from '../../assets/2016/20167.jpg';
import año168 from '../../assets/2016/20168.jpg';
import año169 from '../../assets/2016/20169.jpg';
import año1610 from '../../assets/2016/201610.jpg';
import año1611 from '../../assets/2016/201611.jpg';
import año1612 from '../../assets/2016/201612.jpg';

//2017
import año171 from '../../assets/2017/20171.jpg';
import año172 from '../../assets/2017/20172.jpg';
import año173 from '../../assets/2017/20173.jpg';
import año174 from '../../assets/2017/20174.jpg';
import año175 from '../../assets/2017/20175.jpg';
import año176 from '../../assets/2017/20176.jpg';
import año177 from '../../assets/2017/20177.jpg';
import año178 from '../../assets/2017/20178.jpg';
import año179 from '../../assets/2017/20179.jpg';
import año1710 from '../../assets/2017/201710.jpg';
import año1711 from '../../assets/2017/201711.jpg';
import año1712 from '../../assets/2017/201712.jpg';
import año1713 from '../../assets/2017/201713.jpg';
import año1714 from '../../assets/2017/201714.jpg';
import año1715 from '../../assets/2017/201715.jpg';
import año1716 from '../../assets/2017/201716.jpg';
import año1717 from '../../assets/2017/201717.jpg';
import año1718 from '../../assets/2017/201718.jpg';
import año1719 from '../../assets/2017/201719.jpg';
import año1720 from '../../assets/2017/201720.jpg';
import año1721 from '../../assets/2017/201721.jpg';
import año1722 from '../../assets/2017/201722.jpg';
import año1723 from '../../assets/2017/201723.jpg';
import año1724 from '../../assets/2017/201724.jpg';
import año1725 from '../../assets/2017/201725.jpg';
import año1726 from '../../assets/2017/201726.jpg';
import año1727 from '../../assets/2017/201727.jpg';
import año1728 from '../../assets/2017/201728.jpg';
import año1729 from '../../assets/2017/201729.jpg';
import año1730 from '../../assets/2017/201730.jpg';
import año1731 from '../../assets/2017/201730.jpg';

//2018
import año181 from '../../assets/2018/20181.jpg';
import año182 from '../../assets/2018/20182.jpg';
import año183 from '../../assets/2018/20183.jpg';
import año184 from '../../assets/2018/20184.jpg';
import año185 from '../../assets/2018/20185.jpg';
import año186 from '../../assets/2018/20186.jpg';
import año187 from '../../assets/2018/20187.jpg';
import año188 from '../../assets/2018/20188.jpg';

//2020
import año201 from '../../assets/2020/20201.jpg';
import año202 from '../../assets/2020/20202.jpg';
import año203 from '../../assets/2020/20203.jpg';
import año204 from '../../assets/2020/20204.jpg';

//2021
import año211 from '../../assets/2021/20211.jpg';
import año212 from '../../assets/2021/20212.jpg';
import año213 from '../../assets/2021/20213.jpg';
import año214 from '../../assets/2021/20214.jpg';
import año215 from '../../assets/2021/20215.jpg';
import año216 from '../../assets/2021/20216.jpg';
import año217 from '../../assets/2021/20217.jpg';
import año218 from '../../assets/2021/20218.jpg';
import año219 from '../../assets/2021/20219.jpg';

export default function Gallery(props) {
    const selected = props.selected;

    const año2003 = [
        { original: año31, originalClass: 'image-gallery-image', thumbnailWidth: '300px', originalWidth: '300px', originalHeight: 'auto', thumbnailClass: 'image-gallery-image',   thumbnail: año31 },
        { original: año32, originalClass: 'image-gallery-image', thumbnail: año32 },
        { original: año33, originalClass: 'image-gallery-image', thumbnail: año33 },
        { original: año34, originalClass: 'image-gallery-image', thumbnail: año34 },
        { original: año35, originalClass: 'image-gallery-image', thumbnail: año35 },
        { original: año36, originalClass: 'image-gallery-image', thumbnail: año36 }
    ];
    
    // 2004
    const año2004 = [
        { original: año41, originalClass: 'image-gallery-image', thumbnail: año41 },
        { original: año42, originalClass: 'image-gallery-image', thumbnail: año42 },
        { original: año43, originalClass: 'image-gallery-image', thumbnail: año43 },
        { original: año44, originalClass: 'image-gallery-image', thumbnail: año44 },
        { original: año45, originalClass: 'image-gallery-image', thumbnail: año45 }
    ];

    // 2007
    const año2007 = [
        { original: año71, originalClass: 'image-gallery-image', thumbnail: año71 },
        { original: año72, originalClass: 'image-gallery-image', thumbnail: año72 },
        { original: año73, originalClass: 'image-gallery-image', thumbnail: año73 },
        { original: año74, originalClass: 'image-gallery-image', thumbnail: año74 },
        { original: año75, originalClass: 'image-gallery-image', thumbnail: año75 },
        { original: año76, originalClass: 'image-gallery-image', thumbnail: año76 },
        { original: año77, originalClass: 'image-gallery-image', thumbnail: año77 },
        { original: año78, originalClass: 'image-gallery-image', thumbnail: año78 },
        { original: año79, originalClass: 'image-gallery-image', thumbnail: año79 },
        { original: año710, originalClass: 'image-gallery-image', thumbnail: año710 },
        { original: año711, originalClass: 'image-gallery-image', thumbnail: año711 },
        { original: año712, originalClass: 'image-gallery-image', thumbnail: año712 },
    ];
    
    // 2011
    const año2011 = [
        { original: año111, originalClass: 'image-gallery-image', thumbnail: año111 },
        { original: año112, originalClass: 'image-gallery-image', thumbnail: año112 },
        { original: año113, originalClass: 'image-gallery-image', thumbnail: año113 },
        { original: año114, originalClass: 'image-gallery-image', thumbnail: año114 },
        { original: año115, originalClass: 'image-gallery-image', thumbnail: año115 },
        { original: año116, originalClass: 'image-gallery-image', thumbnail: año116 },
        { original: año117, originalClass: 'image-gallery-image', thumbnail: año117 },
        { original: año118, originalClass: 'image-gallery-image', thumbnail: año118 },
        { original: año119, originalClass: 'image-gallery-image', thumbnail: año119 },
        { original: año1110, originalClass: 'image-gallery-image', thumbnail: año1110 },
        { original: año1111, originalClass: 'image-gallery-image', thumbnail: año1111 },
        { original: año1112, originalClass: 'image-gallery-image', thumbnail: año1112 },
        { original: año1113, originalClass: 'image-gallery-image', thumbnail: año1113 },
        { original: año1114, originalClass: 'image-gallery-image', thumbnail: año1114 },
        { original: año1115, originalClass: 'image-gallery-image', thumbnail: año1115 },
        { original: año1116, originalClass: 'image-gallery-image', thumbnail: año1116 },
        { original: año1117, originalClass: 'image-gallery-image', thumbnail: año1117 },
        { original: año1118, originalClass: 'image-gallery-image', thumbnail: año1118 }
    ];
    
    // 2012
    const año2012 = [
        { original: año121, originalClass: 'image-gallery-image', thumbnail: año121 },
        { original: año122, originalClass: 'image-gallery-image', thumbnail: año122 },
        { original: año123, originalClass: 'image-gallery-image', thumbnail: año123 },
        { original: año124, originalClass: 'image-gallery-image', thumbnail: año124 },
        { original: año125, originalClass: 'image-gallery-image', thumbnail: año125 },
        { original: año126, originalClass: 'image-gallery-image', thumbnail: año126 },
        { original: año127, originalClass: 'image-gallery-image', thumbnail: año127 },
        { original: año128, originalClass: 'image-gallery-image', thumbnail: año128 },
        { original: año129, originalClass: 'image-gallery-image', thumbnail: año129 },
        { original: año1210, originalClass: 'image-gallery-image', thumbnail: año1210 },
        { original: año1211, originalClass: 'image-gallery-image', thumbnail: año1211 },
        { original: año1212, originalClass: 'image-gallery-image', thumbnail: año1212 },
        { original: año1213, originalClass: 'image-gallery-image', thumbnail: año1213 },
        { original: año1214, originalClass: 'image-gallery-image', thumbnail: año1214 },
        { original: año1215, originalClass: 'image-gallery-image', thumbnail: año1215 },
        { original: año1216, originalClass: 'image-gallery-image', thumbnail: año1216 },
        { original: año1217, originalClass: 'image-gallery-image', thumbnail: año1217 },
        { original: año1218, originalClass: 'image-gallery-image', thumbnail: año1218 },
        { original: año1219, originalClass: 'image-gallery-image', thumbnail: año1219 },
        { original: año1220, originalClass: 'image-gallery-image', thumbnail: año1220 },
        { original: año1221, originalClass: 'image-gallery-image', thumbnail: año1221 },
        { original: año1222, originalClass: 'image-gallery-image', thumbnail: año1222 }
    ];
    
    // 2013
    const año2013 = [
        { original: año131, originalClass: 'image-gallery-image', thumbnail: año131 },
        { original: año132, originalClass: 'image-gallery-image', thumbnail: año132 },
        { original: año133, originalClass: 'image-gallery-image', thumbnail: año133 },
        { original: año134, originalClass: 'image-gallery-image', thumbnail: año134 },
        { original: año135, originalClass: 'image-gallery-image', thumbnail: año135 },
        { original: año136, originalClass: 'image-gallery-image', thumbnail: año136 }
    ];
    
    // 2015
    const año2015 = [
        { original: año151, originalClass: 'image-gallery-image', thumbnail: año151 },
        { original: año152, originalClass: 'image-gallery-image', thumbnail: año152 },
        { original: año153, originalClass: 'image-gallery-image', thumbnail: año153 },
        { original: año154, originalClass: 'image-gallery-image', thumbnail: año154 },
        { original: año155, originalClass: 'image-gallery-image', thumbnail: año155 },
        { original: año156, originalClass: 'image-gallery-image', thumbnail: año156 },
        { original: año157, originalClass: 'image-gallery-image', thumbnail: año157 },
        { original: año158, originalClass: 'image-gallery-image', thumbnail: año158 },
        { original: año159, originalClass: 'image-gallery-image', thumbnail: año159 },
        { original: año1510, originalClass: 'image-gallery-image', thumbnail: año1510 },
        { original: año1511, originalClass: 'image-gallery-image', thumbnail: año1511 },
        { original: año1512, originalClass: 'image-gallery-image', thumbnail: año1512 }
    ];
    
    // 2016
    const año2016 = [
        { original: año161, originalClass: 'image-gallery-image', thumbnail: año161 },
        { original: año162, originalClass: 'image-gallery-image', thumbnail: año162 },
        { original: año163, originalClass: 'image-gallery-image', thumbnail: año163 },
        { original: año164, originalClass: 'image-gallery-image', thumbnail: año164 },
        { original: año165, originalClass: 'image-gallery-image', thumbnail: año165 },
        { original: año166, originalClass: 'image-gallery-image', thumbnail: año166 },
        { original: año167, originalClass: 'image-gallery-image', thumbnail: año167 },
        { original: año168, originalClass: 'image-gallery-image', thumbnail: año168 },
        { original: año169, originalClass: 'image-gallery-image', thumbnail: año169 },
        { original: año1610, originalClass: 'image-gallery-image', thumbnail: año1610 },
        { original: año1611, originalClass: 'image-gallery-image', thumbnail: año1611 },
        { original: año1612, originalClass: 'image-gallery-image', thumbnail: año1612 }
    ];
    
    // 2017
    const año2017 = [
        { original: año171, originalClass: 'image-gallery-image', thumbnail: año171 },
        { original: año172, originalClass: 'image-gallery-image', thumbnail: año172 },
        { original: año173, originalClass: 'image-gallery-image', thumbnail: año173 },
        { original: año174, originalClass: 'image-gallery-image', thumbnail: año174 },
        { original: año175, originalClass: 'image-gallery-image', thumbnail: año175 },
        { original: año176, originalClass: 'image-gallery-image', thumbnail: año176 },
        { original: año177, originalClass: 'image-gallery-image', thumbnail: año177 },
        { original: año178, originalClass: 'image-gallery-image', thumbnail: año178 },
        { original: año179, originalClass: 'image-gallery-image', thumbnail: año179 },
        { original: año1710, originalClass: 'image-gallery-image', thumbnail: año1710 },
        { original: año1711, originalClass: 'image-gallery-image', thumbnail: año1711 },
        { original: año1712, originalClass: 'image-gallery-image', thumbnail: año1712 },
        { original: año1713, originalClass: 'image-gallery-image', thumbnail: año1713 },
        { original: año1714, originalClass: 'image-gallery-image', thumbnail: año1714 },
        { original: año1715, originalClass: 'image-gallery-image', thumbnail: año1715 },
        { original: año1716, originalClass: 'image-gallery-image', thumbnail: año1716 },
        { original: año1717, originalClass: 'image-gallery-image', thumbnail: año1717 },
        { original: año1718, originalClass: 'image-gallery-image', thumbnail: año1718 },
        { original: año1719, originalClass: 'image-gallery-image', thumbnail: año1719 },
        { original: año1720, originalClass: 'image-gallery-image', thumbnail: año1720 },
        { original: año1721, originalClass: 'image-gallery-image', thumbnail: año1721 },
        { original: año1722, originalClass: 'image-gallery-image', thumbnail: año1722 },
        { original: año1723, originalClass: 'image-gallery-image', thumbnail: año1723 },
        { original: año1724, originalClass: 'image-gallery-image', thumbnail: año1724 },
        { original: año1725, originalClass: 'image-gallery-image', thumbnail: año1725 },
        { original: año1726, originalClass: 'image-gallery-image', thumbnail: año1726 },
        { original: año1727, originalClass: 'image-gallery-image', thumbnail: año1727 },
        { original: año1728, originalClass: 'image-gallery-image', thumbnail: año1728 },
        { original: año1729, originalClass: 'image-gallery-image', thumbnail: año1729 },
        { original: año1730, originalClass: 'image-gallery-image', thumbnail: año1730 },
        { original: año1731, originalClass: 'image-gallery-image', thumbnail: año1731 }
    ];
    
    // 2018
    const año2018 = [
        { original: año181, thumbnail: año181 },
        { original: año182, thumbnail: año182 },
        { original: año183, thumbnail: año183 },
        { original: año184, thumbnail: año184 },
        { original: año185, thumbnail: año185 },
        { original: año186, thumbnail: año186 },
        { original: año187, thumbnail: año187 },
        { original: año188, thumbnail: año188 }
    ];
    
    // 2020
    const año2020 = [
        { original: año201, thumbnail: año201 },
        { original: año202, thumbnail: año202 },
        { original: año203, thumbnail: año203 },
        { original: año204, thumbnail: año204 }
    ];
    
    // 2021
    const año2021 = [
        { original: año211, thumbnail: año211 },
        { original: año212, thumbnail: año212 },
        { original: año213, thumbnail: año213 },
        { original: año214, thumbnail: año214 },
        { original: año215, thumbnail: año215 },
        { original: año216, thumbnail: año216 },
        { original: año217, thumbnail: año217 },
        { original: año218, thumbnail: año218 },
        { original: año219, thumbnail: año219 }
    ];

    let images = [];

    if (selected === '2003') {
        images = año2003;
    } else if (selected === '2004') {
        images = año2004;
    } else if (selected === '2007') {
        images = año2007;
    } else if (selected === '2011') {
        images = año2011;
    } else if (selected === '2012') {
        images = año2012;
    } else if (selected === '2013') {
        images = año2013;
    } else if (selected === '2015') {
        images = año2015;
    } else if (selected === '2016') {
        images = año2016;
    } else if (selected === '2017') {
        images = año2017;
    } else if (selected === '2018') {
        images = año2018;
    } else if (selected === '2020') {
        images = año2020;
    } else if (selected === '2021') {
        images = año2021;
    }

    return(
        <div>
            <ImageGallery
                items={images}
                showThumbnails={false}
                autoPlay={true}
                originalHeight={100}
                originalWidth={100}
                additionalClass='Gallery'
            />
        </div>
    );
}