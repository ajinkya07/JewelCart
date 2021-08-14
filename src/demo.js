
const ClientOnboarding = props => {
  const [scrollIndicatorY, setscrollIndicatorY] = useState(
    new Animated.Value(0),
  );
  const [scrollIndicator2Y, setscrollIndicator2Y] = useState(
    new Animated.Value(0),
  );


  return (
    <View style={styles.container}>
      <ScrollView>

        <View style={styles.weManageContainer}>

          <Animated.ScrollView
            style={{ overflow: 'visible' }}
            contentContainerStyle={styles.manageCardScrollView}
            showsHorizontalScrollIndicator={false}
            horizontal
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollIndicatorY } } }],
              // {listener: event => console.log(event.nativeEvent)},
              { useNativeDriver: true },
            )}
            scrollEventThrottle={16}>
            <View style={{ flexDirection: 'row', paddingLeft: 5 }}>
              <WeManageCard
                number={(1, 250)}
                title={'Manufacturing\ncompanies'}
                icon={IconPack.MANAGE_ICON1}
              />
              <WeManageCard
                number={50}
                title={'Potential\nunicorn startups'}
                icon={IconPack.MANAGE_ICON2}
              />
              <WeManageCard
                number={50}
                title={'EV\ncompanies'}
                icon={IconPack.MANAGE_ICON2}
              />
            </View>
          </Animated.ScrollView>
          <ScrollProgressComponent
            containerStyle={styles.scollComponentStyle}
            scrollPositionStyle={{
              transform: [
                {
                  translateX: Animated.multiply(
                    scrollIndicatorY,
                    0.2837837838,
                  ).interpolate({
                    inputRange: [0, 42],
                    outputRange: [0, 42],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            }}
          />
          <LinearGradient colors={['#ECEFF4', '#FFFFFF']}>
            <Image
              source={IconPack.TRACK_WEALTH}
              style={styles.trackWealthIcon}
            />
            <Text style={styles.trackTitle}>
              We help you track your{'\n'}wealth in{' '}
              <Text style={{ fontWeight: '600' }}>
                multiple{'\n'}different ways
              </Text>
            </Text>

            <Animated.ScrollView
              contentContainerStyle={styles.trackCardScrollView}
              showsHorizontalScrollIndicator={false}
              horizontal
              onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { x: scrollIndicator2Y } } }],
                { listener: event => console.log(event.nativeEvent) },
                { useNativeDriver: true },
              )}
              scrollEventThrottle={16}>
              <View style={styles.trackContainer}>
                <TrackWealthCard
                  icon={IconPack.TRACK1}
                  iconStyle={styles.track1IconStyle}
                  title="By"
                  titleBold="Family Member"
                />
                <TrackWealthCard
                  icon={IconPack.TRACK3}
                  iconStyle={styles.track2IconStyle}
                  title="By"
                  titleBold={'Asset\nClass'}
                />
                <TrackWealthCard
                  icon={IconPack.TRACK4}
                  iconStyle={styles.track3IconStyle}
                  title="By"
                  titleBold="Performance"
                />
                <TrackWealthCard
                  icon={IconPack.TRACK2}
                  iconStyle={styles.track4IconStyle}
                  title="Against"
                  titleBold="Benchmarks"
                />
              </View>
            </Animated.ScrollView>
            <ScrollProgressComponent
              containerStyle={styles.scollTrackComponentStyle}
              scrollPositionStyle={{
                transform: [
                  {
                    translateX: Animated.multiply(
                      scrollIndicator2Y,
                      0.156424581,
                    ).interpolate({
                      inputRange: [0, 42],
                      outputRange: [0, 42],
                      extrapolate: 'clamp',
                    }),
                  },
                ],
              }}
            />
          </LinearGradient>
          <Text style={styles.trackTitle}>
            Our research team keeps{'\n'}you updated,{' '}
            <Text style={{ fontWeight: '600' }}>
              with 200+{'\n'}stocks under their{'\n'}watch
            </Text>
          </Text>
          <TopStockList />
          <View style={styles.listenToPodcastContainer}>
            <Text style={styles.h5TitleStyle}>
              Listen to{'\n'}beautifully{'\n'}
              <Text style={{ fontWeight: '600' }}>
                podcasted{'\n'}research reports
              </Text>
            </Text>
            <Image
              source={IconPack.LISTEN_TO_PODCASTS}
              style={styles.listenToPodcastsStyle}
            />
          </View>
          <View style={styles.afterListenToPodcastContainer}>
            <Image
              source={IconPack.SELL_BUY_IMAGE}
              style={styles.sellBuyImage}
            />
            <Text style={styles.h5TitleStyle2}>
              Get <Text style={{ fontWeight: '600' }}>daily</Text> short-term,
              {'\n'}mid term and{'\n'}long-term{' '}
              <Text style={{ fontWeight: '600' }}>
                research{'\n'}calls on stocks
              </Text>
            </Text>
          </View>
          <LinearGradient colors={['#ECEFF4', '#FFFFFF']}>
            <Image source={IconPack.ELLIPSE_SMALL} style={styles.smallCircle} />
            <Image source={IconPack.ELLIPSE_BIG} style={styles.bigCircle} />
            <Text style={styles.h2TitleStyle}>
              And for us, the human{'\n'}touch, is non-negotiable
            </Text>
            <View style={styles.fa1ContainerStyle}>
              <Image source={IconPack.FA1_IMAGE} style={styles.fa1ImageStyle} />
              <Text style={styles.fa1TextStyle}>
                Your financial advisors{'\n'}are a{' '}
                <Text style={{ fontWeight: '700' }}>single call away</Text>
              </Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.faContainerStyle}>
                <Image source={IconPack.FA_IMAGE} style={styles.faImageStyle} />
                <Text style={styles.faTextStyle}>
                  They focus on{'\n'}
                  <Text style={{ fontWeight: '700' }}>
                    scheduled portfolio{'\n'}review meetings
                  </Text>
                </Text>
              </View>
              <View style={styles.fa2ContainerStyle}>
                <Image
                  source={IconPack.FA2_IMAGE}
                  style={styles.fa2ImageStyle}
                />
                <Text style={styles.fa2TextStyle}>
                  They give you{'\n'}
                  <Text style={{ fontWeight: '700' }}>unbiased{'\n'}advice</Text>
                </Text>
              </View>
            </View>
            <GetStartedButton />
          </LinearGradient>
        </View>
      </ScrollView>
    </View>
  );
};

const WeManageCard = ({ number, title, icon }) => (
  <View style={styles.manageCardStyle}>
    <Image source={icon} style={styles.manageCardIcon} />
    <View style={styles.weManageTextContainer}>
      <Text style={styles.manageNumberStyle}>{number}</Text>
      <Text style={styles.manageTextStyle}>{title}</Text>
    </View>
  </View>
);

const TrackWealthCard = ({ title, titleBold, icon, iconStyle }) => (
  <View style={styles.trackWealthCardStyle}>
    <Image source={icon} style={iconStyle} />
    <Text style={styles.trackTitleStyle}>
      {title} <Text style={{ fontWeight: '600' }}>{titleBold}</Text>
    </Text>
  </View>
);

const ScrollProgressComponent = ({ containerStyle, scrollPositionStyle }) => (
  <View style={containerStyle || null}>
    <View style={styles.scollProgressContainer} />
    <Animated.View
      style={[styles.scollPosition, scrollPositionStyle || null]}
    />
  </View>
);

const TopStockList = () => {
  const list1Ref = useRef(null);
  useEffect(() => {
    setTimeout(() => {
      list1Ref.current.scrollTo({ x: 50, y: 0 });
    }, 200);
  }, []);
  return (
    <>
      <ScrollView
        ref={list1Ref}
        horizontal
        showsHorizontalScrollIndicator={false}>
        {TopStockList1.map((item, index) => (
          <View>
            <Image
              key={`TopStockList1-${index}`}
              source={item}
              style={styles.stockImageStyle}
            />
            {TopStockList2.length > index && (
              <Image
                key={`TopStockList2-${index}`}
                source={TopStockList2[index]}
                style={[styles.stockImageStyle, styles.list2ItemStyle]}
              />
            )}
          </View>
        ))}
      </ScrollView>
    </>
  );
};

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.white_color,
  },
  hitSlop: {
    top: 10,
    bottom: 10,
    left: 10,
    right: 10,
  },
  buttonCloseStyle: {
    marginRight: '20rem',
    height: '48rem',
    width: undefined,
    aspectRatio: 1,
  },
  logoTextStyle: {
    height: '27rem',
    width: undefined,
    aspectRatio: 384 / 81,
    alignSelf: 'center',
    marginVertical: '30rem',
  },
  fewMoreText: {
    fontFamily: Theme.fontEncSansRegular,
    fontWeight: '300',
    fontSize: '40rem',
    color: Theme.primary_black,
    lineHeight: '50rem',
    textAlign: 'center',
  },
  aboutUsText: {
    fontWeight: '600',
  },
  weManageContainer: {
    marginTop: '6rem',
  },
  treeStyle: {
    height: '222rem',
    width: undefined,
    aspectRatio: 555 / 669,
    position: 'absolute',
    top: 0,
    right: 0,
  },
  weManageText: {
    fontFamily: Theme.fontEncSansRegular,
    fontWeight: '400',
    fontSize: '20rem',
    color: Theme.primary_black,
    lineHeight: '30rem',
    marginLeft: '20rem',
    marginTop: '98rem',
  },
  weManageAmoutText: {
    fontWeight: '700',
  },
  manageCardScrollView: {
    paddingTop: '20rem',
    paddingBottom: '30rem',
    paddingRight: '20rem',
  },
  manageCardStyle: {
    marginLeft: 15,
    paddingTop: '25rem',
    paddingHorizontal: '22rem',
    paddingBottom: '30rem',
    borderRadius: 25,

    backgroundColor: Theme.white_color,
    shadowColor: Theme.black_color,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.15,
    shadowRadius: 35,

    elevation: 5,
  },
  manageCardIcon: {
    height: '42rem',
    width: undefined,
    aspectRatio: 1,
  },
  weManageTextContainer: {
    marginTop: '20rem',
    width: '106rem',
  },
  manageNumberStyle: {
    fontFamily: Theme.fontRobotoRegular,
    fontWeight: '700',
    fontSize: '14rem',
    color: Theme.primary_black,
    lineHeight: '19.6rem',
  },
  manageTextStyle: {
    fontFamily: Theme.fontEncSansRegular,
    fontWeight: '300',
    fontSize: '14rem',
    color: Theme.primary_black,
    lineHeight: '19.6rem',
  },
  scollProgressContainer: {
    width: 70,
    height: '5rem',
    borderRadius: 100,
    backgroundColor: Theme.brand_dark_blue,
    opacity: 0.1,
  },
  scollPosition: {
    width: 28,
    height: '5rem',
    borderRadius: 100,
    backgroundColor: Theme.brand_dark_blue,
    position: 'absolute',
  },
  scollComponentStyle: {
    marginLeft: '20rem',
    marginBottom: '60rem',
  },
  trackWealthIcon: {
    height: '113rem',
    width: undefined,
    aspectRatio: 379 / 339,
    alignSelf: 'center',
    marginTop: '23rem',
  },
  trackTitle: {
    fontFamily: Theme.fontEncSansRegular,
    fontWeight: '400',
    fontSize: '30rem',
    color: Theme.primary_black,
    lineHeight: '37.5rem',
    textAlign: 'center',
  },
  trackWealthCardStyle: {
    width: '150rem',
    paddingBottom: '25rem',
    borderRadius: 20,

    backgroundColor: Theme.white_color,
    borderColor: '#E6AF2E80',
    borderWidth: 1,
    marginRight: '20rem',
  },
  trackTitleStyle: {
    fontFamily: Theme.fontEncSansRegular,
    fontWeight: '400',
    fontSize: '16rem',
    color: Theme.primary_black,
    lineHeight: '20rem',
    width: '104rem',
    marginHorizontal: '23rem',
    textAlign: 'center',
  },
  trackCardScrollView: {
    paddingTop: '25rem',
    paddingBottom: '30rem',
  },
  scollTrackComponentStyle: {
    marginLeft: '20rem',
    marginBottom: '22rem',
  },
  stockImageStyle: {
    height: '60rem',
    width: undefined,
    aspectRatio: 62 / 61,
    marginRight: '20.61rem',
  },
  list2ItemStyle: { left: '30rem', marginTop: '20.41rem' },
  topStockListScrollView1Style: {
    marginTop: '30.09rem',
    paddingLeft: '20.61rem',
  },
  topStockListScrollView2Style: {
    marginTop: '20.41rem',
    paddingLeft: '20.61rem',
  },
  listenToPodcastContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '20rem',
    marginTop: '81.33rem',
  },
  h5TitleStyle: {
    fontFamily: Theme.fontEncSansRegular,
    fontWeight: '400',
    fontSize: '16rem',
    color: Theme.primary_black,
    lineHeight: '20rem',
    marginTop: '57rem',
  },
  listenToPodcastsStyle: {
    height: '149rem',
    width: undefined,
    aspectRatio: 466 / 448,
  },
  sellBuyImage: {
    height: '89.11rem',
    width: undefined,
    aspectRatio: 465 / 268,
  },
  afterListenToPodcastContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: '20rem',
    marginTop: '62.75rem',
    marginBottom: '60.89rem',
  },
  h5TitleStyle2: {
    fontFamily: Theme.fontEncSansRegular,
    fontWeight: '400',
    fontSize: '16rem',
    color: Theme.primary_black,
    lineHeight: '20rem',
  },
  h2TitleStyle: {
    fontFamily: Theme.fontEncSansRegular,
    fontWeight: '400',
    fontSize: '30rem',
    color: Theme.primary_black,
    lineHeight: '37.5rem',
    textAlign: 'center',
    marginTop: '41rem',
  },
  fa1ImageStyle: {
    height: '60rem',
    width: undefined,
    aspectRatio: 1,
    resizeMode: 'center',
    borderRadius: 25,
  },
  fa1TextStyle: {
    fontFamily: Theme.fontEncSansRegular,
    fontWeight: '400',
    fontSize: '14rem',
    color: Theme.primary_black,
    lineHeight: '20rem',
    marginTop: '8rem',
    textAlign: 'center',
  },
  fa1ContainerStyle: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '25rem',
  },
  faImageStyle: {
    height: '40rem',
    width: undefined,
    aspectRatio: 1,
    resizeMode: 'center',
    borderRadius: 15,
  },
  faTextStyle: {
    fontFamily: Theme.fontEncSansRegular,
    fontWeight: '400',
    fontSize: '14rem',
    color: Theme.primary_black,
    lineHeight: '20rem',
    marginTop: '11rem',
    textAlign: 'center',
  },
  faContainerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '25rem',
  },
  fa2ImageStyle: {
    height: '40rem',
    width: undefined,
    aspectRatio: 1,
    resizeMode: 'center',
    borderRadius: 15,
  },
  fa2TextStyle: {
    fontFamily: Theme.fontEncSansRegular,
    fontWeight: '400',
    fontSize: '14rem',
    color: Theme.primary_black,
    lineHeight: '20rem',
    marginTop: '11rem',
    textAlign: 'center',
  },
  fa2ContainerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '25rem',
  },
  smallCircle: {
    width: '226rem',
    height: undefined,
    aspectRatio: 1,
    position: 'absolute',
    top: '17rem',
    alignSelf: 'center',
  },
  bigCircle: {
    width: AppStore.screenWidth,
    height: undefined,
    aspectRatio: 1,
    position: 'absolute',
    top: '-58rem',
    left: 0,
    right: 0,
  },
  track1IconStyle: {
    height: '88rem',
    width: undefined,
    aspectRatio: 408 / 264,
    alignSelf: 'center',
    marginTop: '13rem',
    marginBottom: '21rem',
  },
  track2IconStyle: {
    height: '77rem',
    width: undefined,
    aspectRatio: 225 / 231,
    alignSelf: 'center',
    marginTop: '18rem',
    marginBottom: '27rem',
  },
  track3IconStyle: {
    height: '71rem',
    width: undefined,
    aspectRatio: 195 / 213,
    alignSelf: 'center',
    marginTop: '30rem',
    marginBottom: '22rem',
  },
  track4IconStyle: {
    height: '62rem',
    width: undefined,
    aspectRatio: 451 / 190,
    alignSelf: 'center',
    marginTop: '49rem',
    marginBottom: '13rem',
  },
  trackContainer: { flexDirection: 'row', paddingLeft: '20rem' },
});

export default ClientOnboarding;
