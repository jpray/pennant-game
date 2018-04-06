/* @flow */
import {adviceAfter, uniqueString} from 'utility-toolkit';

/**
 * Mixin adds CustomEvent handling to an element
 */
export const modelSync = (baseClass) => {
	const eventsHandlersRef = uniqueString.get('_eventsHandlers');

	function afterSetStateAdvice() {
		return function (newState, accessor) {
      this.processSyncedPropertiesBasedOnAccessor(accessor);
		};
	}

	class ModelSync extends baseClass {

		constructor(...args) {
			super(...args);
      this.syncedPropertiesData = new Map();
      this.syncedPropertiesDataPaused = new WeakMap();
		}

    syncProperties(target, ...propsArray) {
      propsArray.forEach((propData) => {
        let targetProperty = propData[0];
        let accessor = propData[1];
        this.syncedPropertiesData.set(target, {
          accessor: accessor,
          targetProperty: targetProperty
        });
      })
      this.processSyncedPropertiesBasedOnTarget(target);
    }

    pauseSync(el) {
      if (this.syncedPropertiesData.has(el)) {
        this.syncedPropertiesDataPaused.set(el, this.syncedPropertiesData.get(el));
        this.syncedPropertiesData.delete(el);
      }
    }

    unpauseSync(el) {
      if (this.syncedPropertiesDataPaused.has(el)) {
        this.syncedPropertiesData.set(el, this.syncedPropertiesDataPaused.get(el));
        this.syncedPropertiesDataPaused.delete(el);
      }
    }

    processSyncedPropertiesBasedOnAccessor(accessor) {
      this.syncedPropertiesData.forEach((opts, el) => {
        //TODO: this check is naive currently
        if (accessor.indexOf(opts.accessor) === -1) {
          return;
        }
        el[opts.targetProperty] = this.get(opts.accessor);
      })
    }

    processSyncedPropertiesBasedOnTarget(target=null) {
      this.syncedPropertiesData.forEach((opts, el) => {
        if (target && target !== el) {
          return;
        }
        el[opts.targetProperty] = this.get(opts.accessor);
      })
    }

	};

  adviceAfter(afterSetStateAdvice(), '_setState')(ModelSync);
  return ModelSync;
};
