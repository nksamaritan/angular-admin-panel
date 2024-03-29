<?php

/*
 * CKFinder
 * ========
 * http://cksource.com/ckfinder
 * Copyright (C) 2007-2016, CKSource - Frederico Knabben. All rights reserved.
 *
 * The software, this file and its contents are subject to the CKFinder
 * License. Please read the license.txt file before using, installing, copying,
 * modifying or distribute this file or part of its contents. The contents of
 * this file is part of the Source Code of CKFinder.
 */

namespace CKSource\CKFinder\Exception;

use CKSource\CKFinder\Error;

/**
 * The "invalid CSRF token" exception class.
 *
 * Thrown when received CSRF tokens do not match.
 *
 * @copyright 2016 CKSource - Frederico Knabben
 */
class InvalidCsrfTokenException extends CKFinderException
{
  /**
   * Constructor.
   *
   * @param string $message the exception message
   * @param array $parameters the parameters passed for translation
   * @param \Exception $previous the previous exception
   */
  public function __construct($message = 'Invalid CSRF token.', $parameters = array(), \Exception $previous = null)
  {
    parent::__construct($message, Error::INVALID_REQUEST, $parameters, $previous);
  }
}
