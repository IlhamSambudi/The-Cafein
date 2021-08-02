<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'IQ1EPGDZErWjJkU3ZIWT5lmNBCV/sXA47Q9pYOUmLO0INBTX+OJY2mECdhpCtNgaHjtBIsUploVXwngntQrzXw==');
define('SECURE_AUTH_KEY',  'S7hT3mILd8pOI+w+QTTx0jzXHn7x+KrWu5YJq5ypfcxI2wkuGYVlSBiwhdA5ZNcVoeOYSB++FG0QZqUvE/EFiA==');
define('LOGGED_IN_KEY',    'Ub7345pS505h9nMXBZ+gn8a9L1dJrR/Gc8BZKIpG1nbjh93zS64L3o/i1yW9TBqcuXl0hlSup9J4dsvVU15Ljw==');
define('NONCE_KEY',        'k9+UexkFGBCj3Du+E6/tzu8up8tWGdXGG0jCrZmAVGcEzxxeuOcTsWF9neVHodbPZC1l7rHWL2K/MzYl5DUhGw==');
define('AUTH_SALT',        'ux9OPy/KF8DRjNP8TilB5OhDwT9e+1t0w4qxldtRI/bjMCs6tDazHfl8+rw2mXsduhPB212qEMXZhwq3jhUXYw==');
define('SECURE_AUTH_SALT', 'NY7UK975rzJE4u8QC18Eic3PZ2SAcMaR0ss6buyz3xwjV1l/Wb6LESmEHLY82XMxx9C+q1a9tzjD9PUbTAgn4A==');
define('LOGGED_IN_SALT',   'AyS7xKQ/iJ6jsAeEfeBL9fLf5urQ8EnCiNaS778erAG0cum2E/l5uFhOi9YUNkiACIQbhz0yXDIn0dPg4xePJA==');
define('NONCE_SALT',       'J5IUYjEkJCw3YdklzTB4bSWlkkgdrSru7ggl1A/JrdhdI9z4IC0Zm4O9Mlf5+dRXY0Uu1S2t+rBSfZ55GIxmmw==');

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';




/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
