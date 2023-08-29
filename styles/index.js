import { StyleSheet } from "react-native";

import colors from "../res/colors";
import fonts from "../res/fonts";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.greyLight,
  },
  header: {
    alignSelf: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 48,
    paddingBottom: 48,
  },
  main: {
    flex: 1,
    paddingTop: 20,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 10,
  },
  footer: {
    alignSelf: 'center',
    paddingTop: 24,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 24,
  },
  title: {
    fontSize: 16,
    fontFamily: fonts.regular,
    fontWeight: '400',
    textAlign: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 3,
    backgroundColor: colors.primary,
    marginTop: 24,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: fonts.semibold,
    fontWeight: '600',
    color: colors.white,
  },
  inputGroup: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 16,
    fontFamily: fonts.regular,
    fontWeight: '400',
    marginBottom: 8,
  },
  input: {
    fontSize: 20,
    borderWidth: 1,
    borderColor: colors.greyMedium,
    borderRadius: 3,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: colors.white,
  },
  footerText: {
    fontSize: 13,
    fontFamily: fonts.medium,
    fontWeight: '500',
    color: colors.textMuted,
  },






  searchTitle: {
    fontFamily: fonts.bold,
    color: colors.primary,
  },
  noOfSearchedJobs: {
    marginTop: 2,
    fontFamily: fonts.medium,
    color: colors.primary,
  },
  footerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10
  },
  paginationButton: {
    width: 30,
    height: 30,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.tertiary
  },
  paginationImage: {
    width: '60%',
    height: '60%',
    tintColor: colors.white
  },
  paginationTextBox: {
    width: 30,
    height: 30,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white
  },
  paginationText: {
    fontFamily: fonts.bold,
    color: colors.primary
  }
});

export default styles;