/**
 * @author Meiblorn (Vadim Fedorenko) <meiblorn@gmail.com | admin@meiblorn.com> on 15/05/16.
 */
export declare class MnFullpageOptions {
    /**
     * Notice:
     *
     * All documentation was taken from https://github.com/alvarotrigo/fullPage.js
     */
    /**
     * Index signature
     */
    [key: string]: any;
    /**
     * ---------------------------------------------------------------------------
     * |                                Navigation                               |
     * ---------------------------------------------------------------------------
     */
    /**
     * A selector can be used to specify the menu to link with
     * the sections. This way the scrolling of the sections will activate
     * the corresponding element in the menu using the class active. This won't
     * generate a menu but will just add the active class to the element in the
     * given menu with the corresponding anchor links. In order to link the elements
     * of the menu with the sections, an HTML 5 data-tag (data-menuanchor) will be
     * needed to use with the same anchor links as used within the sections.
     *
     * @default false
     */
    menu: string;
    /**
     * Determines whether anchors in the URL will have any effect at
     * all in the plugin. You can still using anchors internally for
     * your own functions and callbacks, but they won't have any effect
     * in the scrolling of the site. Useful if you want to combine fullPage.js
     * with other plugins using anchor in the URL.
     */
    lockAnchors: boolean;
    /**
     * Defines the anchor links (#example) to be shown on the URL
     * for each section. Anchors value should be unique. The position
     * of the anchors in the array will define to which sections the
     * anchor is applied. (second position for second section and so on).
     * Using anchors forward and backward navigation will also be possible
     * through the browser. This option also allows users to bookmark a
     * specific section or slide. Be careful! anchors can not have the same
     * value as any ID element on the site (or NAME element for IE). Now
     * anchors can be defined directly in the HTML structure by using the
     * attribute data-anchor as explained here.
     *
     * @default []
     */
    anchors: Array<string>;
    /**
     * If set to true, it will show a navigation bar made up of small circles.
     *
     * @default false
     */
    navigation: boolean;
    /**
     * It can be set to left or right and defines which
     * position the navigation bar will be shown (if using one).
     *
     * @default none
     */
    navigationPosition: string;
    /**
     * Defines the tooltips to show for the navigation circles
     * in case they are being used.
     *
     * @default []
     */
    navigationTooltips: Array<string>;
    /**
     * Shows a persistent tooltip for the actively viewed section
     * in the vertical navigation.
     *
     * @default false
     */
    showActiveTooltip: boolean;
    /**
     * If set to true it will show a navigation bar made up of
     * small circles for each landscape slider on the site.
     *
     * @default false
     */
    slidesNavigation: boolean;
    /**
     * Defines the position for the landscape navigation bar for sliders.
     * Admits top and bottom as values. You may want to modify the CSS styles
     * to determine the distance from the top or bottom as well as any other
     * style such as color.
     *
     * @default bottom
     */
    slidesNavPosition: string;
    /**
     * ---------------------------------------------------------------------------
     * |                                 Scrolling                               |
     * ---------------------------------------------------------------------------
     */
    /**
     * Defines whether to use JavaScript or CSS3 transforms to scroll within
     * sections and slides. Useful to speed up the movement in tablet and mobile
     * devices with browsers supporting CSS3. If this option is set to true and
     * the browser doesn't support CSS3, a jQuery fallback will be used instead.
     *
     * @default true
     */
    css3: boolean;
    /**
     * Speed in milliseconds for the scrolling transitions.
     *
     * @default 700
     */
    scrollingSpeed: number;
    /**
     * Defines whether to use the "automatic" scrolling or the "normal" one.
     * It also has affects the way the sections fit in the browser/device window
     * in tablets and mobile phones.
     *
     * @default true
     */
    autoScrolling: boolean;
    /**
     * If fitToSection is set to true, this delays the fitting
     * by the configured milliseconds.
     *
     * @default 1000
     */
    fitToSection: boolean;
    /**
     * If fitToSection is set to true, this delays the fitting by
     * the configured milliseconds.
     *
     * @default 1000
     */
    fitToSectionDelay: number;
    /**
     * Determines whether to use scrollbar for the site or not.
     * In case of using scroll bar, the autoScrolling functionality
     * will still working as expected. The user will also be free to
     * scroll the site with the scroll bar and fullPage.js will fit the
     * section in the screen when scrolling finishes.
     *
     * @default false
     */
    scrollBar: boolean;
    /**
     * Defines the transition effect to use for the vertical
     * and horizontal scrolling. It requires the file
     * vendors/jquery.easings.min.js or jQuery UI for using some
     * of its transitions. Other libraries could be used instead.
     *
     * @default easeInOutCubic
     */
    easing: string;
    /**
     * Defines the transition effect to use in case of using css3:true.
     * You can use the pre-defined ones (such as linear, ease-out...) or
     * create your own ones using the cubic-bezier function. You might
     * want to use Matthew Lein CSS Easing Animation Tool for it.
     *
     * @default ease
     */
    easingcss3: string;
    /**
     * Defines whether scrolling down in the last section should scroll
     * to the first one or not
     *
     * @default false
     */
    loopBottom: boolean;
    /**
     * Defines whether scrolling up in the first section should
     * scroll to the last one or not.
     *
     * @default false
     */
    loopTop: boolean;
    /**
     * Defines whether horizontal sliders will loop after reaching
     * the last or previous slide or not.
     *
     * @default true
     */
    loopHorizontal: boolean;
    /**
     * Defines whether scrolling down in the last section should
     * scroll down to the first one or not, and if scrolling up in
     * the first section should scroll up to the last one or not.
     * Not compatible with loopTop or loopBottom.
     *
     * @default false
     */
    continuousVertical: boolean;
    /**
     * If you want to avoid the auto scroll when scrolling over
     * some elements, this is the option you need to use. (useful
     * for maps, scrolling divs etc.) It requires a string with the
     * jQuery selectors for those elements.
     *
     * @default null
     */
    normalScrollElements: string;
    /**
     * Defines whether or not to create a scroll for the section
     * in case its content is bigger than the height of it. When
     * set to true, your content will be wrapped by the plugin.
     * Consider using delegation or load your other scripts in the
     * afterRender callback. In case of setting it to true, it requires
     * the vendor plugin jquery.slimscroll.min and it should be
     * loaded before the fullPage.js plugin.
     *
     * @default false
     */
    scrollOverflow: boolean;
    /**
     * Defines a percentage of the browsers window width/height, and
     * how far a swipe must measure for navigating to the next
     * section / slide
     *
     * @default 5
     */
    touchSensitivity: number;
    /**
     * Defines the threshold for the number of hops up the html node
     * tree Fullpage will test to see if normalScrollElements is a match
     * to allow scrolling functionality on divs on a touch device.
     *
     * @default 5
     */
    normalScrollElementTouchThreshold: number;
    /**
     * ---------------------------------------------------------------------------
     * |                              Accessibility                              |
     * ---------------------------------------------------------------------------
     */
    /**
     * Defines if the content can be navigated using the keyboard
     *
     * @default true
     */
    keyboardScrolling: boolean;
    /**
     * Defines whether the load of the site when given an
     * anchor (#) will scroll with animation to its destination or
     * will directly load on the given section.
     *
     * @default true
     */
    animateAnchor: boolean;
    /**
     * Defines whether to push the state of the site to
     * the browser's history. When set to true each
     * section/slide of the site will act as a new page
     * and the back and forward buttons of the browser will
     * scroll the sections/slides to reach the previous or next
     * state of the site. When set to false, the URL will keep
     * changing but will have no effect ont he browser's history.
     * This option is automatically turned off when using
     * autoScrolling:false.
     *
     * @default true
     */
    recordHistory: boolean;
    /**
     * ---------------------------------------------------------------------------
     * |                                 Design                                  |
     * ---------------------------------------------------------------------------
     */
    /**
     * Determines whether to use control arrows for the
     * slides to move right or left.
     *
     * @default true
     */
    controlArrows: boolean;
    /**
     * Vertically centering of the content within sections.
     * When set to true, your content will be wrapped by the plugin.
     * Consider using delegation or load your other scripts
     * in the afterRender callback.
     *
     * @default true
     */
    verticalCentered: boolean;
    /**
     * Whether you want to resize the text when the window is resized.
     *
     * @default false
     */
    resize: boolean;
    /**
     * Define the CSS background-color property for each section.
     *
     * @default none
     */
    sectionsColor: Array<string>;
    /**
     * Defines the top padding for each section with
     * a numerical value and its measure
     * (paddingTop: '10px', paddingTop: '10em'...)
     * Useful in case of using a fixed header.
     *
     * @default 0
     */
    paddingTop: string;
    /**
     * Defines the bottom padding for each section with
     * a numerical value and its measure
     * (paddingBottom: '10px', paddingBottom: '10em'...).
     * Useful in case of using a fixed footer.
     *
     * @default 0
     */
    paddingBottom: string;
    /**
     * Defines which elements will be taken off the scrolling
     * structure of the plugin which is necessary when using
     * the css3 option to keep them fixed. It requires a string
     * with the jQuery selectors for those elements.
     *
     * @default null
     */
    fixedElements: string;
    /**
     * A normal scroll (autoScrolling:false) will be used under
     * the defined width in pixels. A class fp-responsive is added
     * to the body tag in case the user wants to use it for his own
     * responsive CSS. For example, if set to 900, whenever the
     * browser's width is less than 900 the plugin will scroll like
     * a normal site.
     *
     * @default 0
     */
    responsiveWidth: number;
    /**
     * A normal scroll (autoScrolling:false) will be used under
     * the defined height in pixels. A class fp-responsive is added
     * to the body tag in case the user wants to use it for his own
     * responsive CSS. For example, if set to 900, whenever the browser's
     * height is less than 900 the plugin will scroll
     * like a normal site.
     *
     * @default 0
     */
    responsiveHeight: number;
    /**
     * Defines the jQuery selector used for the plugin sections.
     * It might need to be changed sometimes to avoid problem with
     * other plugins using the same selectors as fullpage.js.
     *
     * @default .section
     */
    sectionSelector: string;
    /**
     * Defines the jQuery selector used for the plugin slides.
     * It might need to be changed sometimes to avoid problem
     * with other plugins using the same selectors as fullpage.js.
     *
     * @default .slide
     */
    slideSelector: string;
    /**
     * ---------------------------------------------------------------------------
     * |                                 Callbacks                               |
     * ---------------------------------------------------------------------------
     */
    /**
     * Callback fired once the sections have been loaded, after
     * the scrolling has ended.
     *
     * Parameters:
     *   -  anchorLink: anchorLink corresponding to the section.
     *   -  index: index of the section. Starting from 1.
     *
     * In case of not having anchorLinks defined in the plugin the
     * index parameter would be the only one to use.
     */
    afterLoad: (anchorLink: string, index: number) => void;
    /**
     * This callback is fired once the user leaves a section,
     * in the transition to the new section. Returning false will
     * cancel the move before it takes place.
     *
     * Parameters:
     *    -  index: index of the leaving section. Starting from 1.
     *    -  nextIndex: index of the destination section. Starting from 1.
     *    -  direction: it will take the values up or down depending
     *                  on the scrolling direction.
     *
     */
    onLeave: (index: number, nextIndex: number, direction: string) => void;
    /**
     * This callback is fired just after the structure of
     * the page is generated. This is the callback you want to
     * use to initialize other plugins or fire any code which requires
     * the document to be ready (as this plugin modifies
     * the DOM to create the resulting structure).
     */
    afterRender: () => void;
    /**
     * This callback is fired after resizing the browser's window.
     * Just after the sections are resized.
     */
    afterResize: () => void;
    /**
     * Callback fired once the slide of a section have been loaded, after
     * the scrolling has ended.
     *
     * Parameters:
     *     -  anchorLink: anchorLink corresponding to the section.
     *     -  index: index of the section. Starting from 1.
     *     -  slideAnchor: anchor corresponding to the slide (in case there is)
     *     -  slideIndex: index of the slide. Starting from 1. (the default slide
     *                    doesn't count as slide, but as a section)
     *
     *  In case of not having anchorLinks defined for the slide or slides the
     *  slideIndex parameter would be the only one to use.
     */
    afterSlideLoad: (anchorLink: string, index: number, slideAnchor: string, slideIndex: number) => void;
    /**
     * This callback is fired once the user leaves an slide to go to another,
     * in the transition to the new slide. Returning false will cancel the move
     * before it takes place.
     *
     * Parameters:
     *     -  anchorLink: anchorLink corresponding to the section.
     *     -  index: index of the section. Starting from 1.
     *     -  slideIndex: index of the slide. Starting from 0.
     *     -  direction: takes the values right or left depending on the scrolling
     *                   direction.
     *     -  nextSlideIndex: index of the destination slide. Starting from 0.
     *
     */
    onSlideLeave: (anchorLink: string, index: number, slideIndex: number, direction: string, nextSlideIndex: number) => void;
    /**
     * Public default constructor
     *
     * @param options options js-object
     */
    constructor(options?: Object);
}
