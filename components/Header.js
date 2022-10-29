import React from 'react';
import { withNavigation } from '@react-navigation/compat';
import { TouchableOpacity, StyleSheet, Platform, Dimensions, Image, View, Text } from 'react-native';
import { Block, NavBar, theme } from 'galio-framework';
import { Entypo } from '@expo/vector-icons'; 
import Tabs from './Tabs';
import argonTheme from '../constants/Theme';

const { height, width } = Dimensions.get('window');
const iPhoneX = () => Platform.OS === 'ios' && (height === 812 || width === 812 || height === 896 || width === 896);

class Header extends React.Component {
  handleRightPress = () => {
    const { navigation } = this.props;
    return (navigation.openDrawer());
  }
  
  renderTabs = () => {
    const { tabs, tabIndex, navigation } = this.props;
    const defaultTab = tabs && tabs[0] && tabs[0].id;
    
    if (!tabs) return null;

    return (
      <Tabs
        data={tabs || []}
        initialIndex={tabIndex || defaultTab}
        onChange={id => navigation.setParams({ tabId: id })} />
    )
  }
  renderHeader = () => {
    const { search, options, tabs } = this.props;
    if (search || tabs || options) {
      return (
        <Block center>
          {tabs ? this.renderTabs() : null}
        </Block>
      );
    }
  }
  render() {
    const { back, title, white, transparent, bgColor, iconColor, titleColor, navigation, ...props } = this.props;

    const noShadow = ['Search', 'Categories', 'Deals', 'Pro', 'Profile'].includes(title);
    const headerStyles = [
      !noShadow ? styles.shadow : null,
      transparent ? { backgroundColor: 'rgba(0,0,0,0)' } : null,
    ];

    return (
      <Block style={styles.shadow}>
        <NavBar
          back={false}
          style={styles.navbar}
          transparent={transparent}
          rightStyle={{ alignItems: 'flex-end' }}
          left={
            <View style={{flexDirection:'row',}}>
              <Image style={styles.logo} source={require('../assets/logo.png')}/>
              <Text style={styles.title}>UNcademy</Text>
            </View> 
          }
          right={
            <TouchableOpacity onPress={this.handleRightPress}>
              <Entypo name="menu" size={30} color="#492A55" style={styles.icon}/>
            </TouchableOpacity>
          }
          leftStyle={{ justifyContent:'center' }}
          {...props}
        />
        {this.renderHeader()}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    padding: 12,
    position: 'relative',
  },
  title: {
    width: '100%',
    fontSize: 16,
    fontWeight: 'bold',
  },
  navbar: {
    backgroundColor:'#f2f2f2',
    marginTop: 20,
    marginHorizontal:13,
    padding:5,
    borderRadius:30,
    alignItems: 'center',
    justifyContent:'space-between'
  },
  shadow: {
    backgroundColor: '#A9C2D9',
  },
  notify: {
    backgroundColor: argonTheme.COLORS.LABEL,
    borderRadius: 4,
    height: theme.SIZES.BASE / 2,
    width: theme.SIZES.BASE / 2,
    position: 'absolute',
    top: 9,
    right: 12,
  },
  header: {
    backgroundColor: theme.COLORS.WHITE,
  },
  divider: {
    borderRightWidth: 0.3,
    borderRightColor: theme.COLORS.ICON,
  },
  search: {
    height: 48,
    width: width - 32,
    marginHorizontal: 16,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: argonTheme.COLORS.BORDER
  },
  options: {
    marginBottom: 24,
    marginTop: 10,
    elevation: 4,
  },
  tab: {
    backgroundColor: theme.COLORS.TRANSPARENT,
    width: width * 0.35,
    borderRadius: 0,
    borderWidth: 0,
    height: 24,
    elevation: 0,
  },
  tabTitle: {
    lineHeight: 19,
    fontWeight: '400',
    color: argonTheme.COLORS.HEADER
  },
  logo:{
    width:40,
    height:45,
    marginHorizontal:10
  },
  title:{
    color:"red",
    fontSize:20,
    fontWeight:'bold',
    alignSelf:'center'
  },
});

export default withNavigation(Header);
