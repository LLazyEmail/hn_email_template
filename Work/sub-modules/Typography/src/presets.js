/**
 * Semantic typography presets for newsletter email components.
 *
 * Each preset is a plain object of CSS style properties that can be
 * applied directly to inline styles or used as a reference when building
 * HTML component strings.
 */

export const FONT_FAMILY =
  'trebuchet ms,lucida grande,lucida sans unicode,lucida sans,tahoma,sans-serif';

/**
 * Semantic style presets.
 *
 * - title    : Main article / newsletter title  (h1, 30 px, bold)
 * - subtitle : Section subtitle                 (p,  17 px, bold)
 * - heading  : In-body section heading          (h3, 18 px, bold)
 * - body     : Standard paragraph text         (div, 16 px, normal)
 * - meta     : Timestamps, source labels, etc.  (span, 14 px, muted)
 * - link     : Inline hyperlink                 (a,   bold, underline)
 */
export const presets = {
  title: {
    fontFamily: FONT_FAMILY,
    fontSize: '30px',
    fontWeight: 'bold',
    color: '#111111',
    lineHeight: '125%',
  },

  subtitle: {
    fontFamily: FONT_FAMILY,
    fontSize: '17px',
    fontWeight: 'bold',
    color: '#111111',
    lineHeight: '150%',
  },

  heading: {
    fontFamily: FONT_FAMILY,
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#111111',
    lineHeight: '125%',
  },

  body: {
    fontFamily: FONT_FAMILY,
    fontSize: '16px',
    fontWeight: 'normal',
    color: '#111111',
    lineHeight: '150%',
  },

  meta: {
    fontFamily: FONT_FAMILY,
    fontSize: '14px',
    fontWeight: 'normal',
    color: '#555555',
    lineHeight: '150%',
  },

  link: {
    color: '#111111',
    fontWeight: 'bold',
    textDecoration: 'underline',
  },
};

export default presets;
