import React from 'react';
import Icon from '@/components/ui/Icon';
import Link from 'next/link';

function Button({
  text,
  type = 'button',
  isLoading,
  disabled,
  className = 'bg-primary-500 text-white',
  children,
  icon,
  loadingClass = 'unset-classname',
  iconPosition = 'left',
  iconClass = 'text-[20px]',
  link,
  onClick,
  div,
}) {
  return (
    <>
      {!link && !div && (
        <button
          type={type}
          onClick={!disabled ? onClick : null}
          className={`btn btn inline-flex justify-center ${
            isLoading ? 'pointer-events-none' : ''
          } ${disabled ? 'opacity-40 cursor-not-allowed' : ''} ${className}`}
        >
          {/* if has children and not loading */}
          {children && !isLoading && children}

          {/* if no children and not loading */}
          {!children && !isLoading && (
            <span
              className={`flex items-center ${
                iconPosition === 'top' ? 'flex-col' : ''
              }`}
            >
              {/* if has icon */}
              {icon && (
                <span
                  className={`
                    ${
                      iconPosition === 'right'
                        ? 'order-1 ltr:ml-2 rtl:mr-2'
                        : ''
                    }
                    ${
                      iconPosition === 'left' && text ? 'ltr:mr-2 rtl:ml-2' : ''
                    }
                    ${iconClass}
                  `}
                >
                  <Icon icon={icon} />
                </span>
              )}
              <span>{text}</span>
            </span>
          )}

          {/* if loading */}
          {isLoading && (
            <div className="flex justify-center items-center">
              <svg
                className={`animate-spin ltr:-ml-1 ltr:mr-3 rtl:-mr-1 rtl:ml-3 h-5 w-5 mr-3 ${loadingClass}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Loading ...
            </div>
          )}
        </button>
      )}
      {/* Similar changes for the `div` and `link` parts, handling `iconPosition: "top"` */}
      {!link && div && (
        <div
          onClick={!disabled ? onClick : null}
          className={`btn btn inline-flex justify-center ${
            isLoading ? 'pointer-events-none' : ''
          } ${disabled ? 'opacity-40 cursor-not-allowed' : ''} ${className}`}
        >
          {/* if has children and not loading */}
          {children && !isLoading && children}

          {/* if no children and not loading */}
          {!children && !isLoading && (
            <span
              className={`flex items-center ${
                iconPosition === 'top' ? 'flex-col' : ''
              }`}
            >
              {/* if has icon */}
              {icon && (
                <span
                  className={`
                    ${
                      iconPosition === 'right'
                        ? 'order-1 ltr:ml-2 rtl:mr-2'
                        : ''
                    }
                    ${
                      iconPosition === 'left' && text ? 'ltr:mr-2 rtl:ml-2' : ''
                    }
                    ${iconClass}
                  `}
                >
                  <Icon icon={icon} />
                </span>
              )}
              <span>{text}</span>
            </span>
          )}

          {/* if loading */}
          {isLoading && (
            <>
              <svg
                className={`animate-spin ltr:-ml-1 ltr:mr-3 rtl:-mr-1 rtl:ml-3 h-5 w-5 ${loadingClass}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Loading ...
            </>
          )}
        </div>
      )}
      {link && !div && (
        <Link
          href={link}
          className={`btn btn inline-flex justify-center ${
            isLoading ? 'pointer-events-none' : ''
          } ${disabled ? 'opacity-40 cursor-not-allowed' : ''} ${className}`}
        >
          {/* if has children and not loading */}
          {children && !isLoading && children}

          {/* if no children and not loading */}
          {!children && !isLoading && (
            <span
              className={`flex items-center ${
                iconPosition === 'top' ? 'flex-col' : ''
              }`}
            >
              {/* if has icon */}
              {icon && (
                <span
                  className={`
                    ${
                      iconPosition === 'right'
                        ? 'order-1 ltr:ml-2 rtl:mr-2'
                        : ''
                    }
                    ${
                      iconPosition === 'left' && text ? 'ltr:mr-2 rtl:ml-2' : ''
                    }
                    ${iconClass}
                  `}
                >
                  <Icon icon={icon} />
                </span>
              )}
              <span>{text}</span>
            </span>
          )}

          {/* if loading */}
          {isLoading && (
            <>
              <svg
                className={`animate-spin ltr:-ml-1 ltr:mr-3 rtl:-mr-1 rtl:ml-3 h-5 w-5 ${loadingClass}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Loading ...
            </>
          )}
        </Link>
      )}
    </>
  );
}

export default Button;
